import { useEffect, useState } from 'react';
import List from '../components/SelectItems';
import CopyButton from '../components/CopyButton';
import MandatoryDisplay from '../components/MandatoryDisplay';
import SolusiDisplay from '../components/SolusiDisplay';
import { getCurrentDateTime } from '../components/DateTime';
import { getMandatory } from '../components/MandatoryService';
import type { MandatoryData } from '../components/MandatoryService';

type Props = {
  segment: string;
};

const TiketPages = ({ segment }: Props) => {
  const [selectedId, setSelectedId] = useState<number | null>(() => {
    const saved = localStorage.getItem("selectedId");
    return saved ? Number(saved) : null;
  });

  

  

  const [mandatory, setMandatory] = useState<MandatoryData[]>([]);
  const [mandatoryText, setMandatoryText] = useState("");
  const [solusiText, setSolusiText] = useState("");

  const replaceTemplateVariables = (
  text: string,
  variables: Record<string, string>
  ) => {
    return text.replace(
      /\$\{([^}]+)\}/g,
      (_, key) => variables[key.trim()] ?? `\${${key}}`
    );
  };

  // Ambil data dari spreadsheet
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMandatory();
        setMandatory(data);
      } catch (error) {
        console.error("Gagal mengambil data mandatory:", error);
      }
    };

    fetchData();
  }, []);

  const selected = mandatory.find(
    item => item.id === selectedId
  );

  // Ketika case / segment berubah
  useEffect(() => {
    if (!selected) return;

    localStorage.setItem("selectedId", String(selectedId));

    const createdDate = getCurrentDateTime();

    const EMPTY = "\u200B\u200B";

    const variables = {
      segment,
      DateTime: createdDate,
      datetime: createdDate,
      date: createdDate,
      EMPTY,

    };

    // =========================
    // MANDATORY
    // =========================

    const mandatoryText = replaceTemplateVariables(
      selected.mandatory,
      variables
    );

    setMandatoryText(mandatoryText);


    // =========================
    // SOLUSI
    // =========================

    const solusi =
      segment === "Email"
        ? selected.solusiemail
        : selected.solusi;

    const bracketText = replaceTemplateVariables(
      selected.bracket,
      variables
    );

    const solusiTextFinal = replaceTemplateVariables(
      solusi,
      variables
    );

    const combinedSolusi = [
      bracketText,
      solusiTextFinal,
    ]
      .filter(Boolean)
      .join("\n\n")

    setSolusiText(combinedSolusi);

  }, [selectedId, segment, selected]);


  // =========================
  // COPY / REPLACE
  // =========================

  useEffect(() => {
    const handleKeyDown = async (e: KeyboardEvent) => {

      // Ctrl + Space
      if (
        e.ctrlKey &&
        !e.shiftKey &&
        e.code === "Space"
      ) {
        e.preventDefault();

        if (!navigator.clipboard) return;

        const clipboardText =
          await navigator.clipboard.readText();

        setMandatoryText(prev =>
          prev.replace(/xxxxxx/g, clipboardText)
        );

        setSolusiText(prev =>
          prev.replace(/xxxxxx/g, clipboardText)
        );
      }

      // Ctrl + Shift + Space
      if (
        e.ctrlKey &&
        e.shiftKey &&
        e.code === "Space"
      ) {
        e.preventDefault();

        if (!navigator.clipboard) return;

        const clipboardText =
          await navigator.clipboard.readText();

        setMandatoryText(prev =>
          prev.replace(/\u200B{2}/g, clipboardText)
        );

        setSolusiText(prev =>
          prev.replace(/\u200B{2}/g, clipboardText)
        );
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, []);


  // =========================
  // RENDER
  // =========================


  return (
    <div className="flex flex-col w-screen">

      <List
        onSelect={setSelectedId}
        selectedId={selectedId}
      />

      <div className="flex gap-2">

        {/* MANDATORY */}
        <div className="w-full">

          {selected && (
            <CopyButton
              text={mandatoryText}
              label="Mandatory"
            />
          )}

          <MandatoryDisplay
            key={selectedId}
            selectedId={selectedId}
            value={mandatoryText}
            onChange={setMandatoryText}
          />

        </div>


        {/* SOLUSI */}
        <div className="w-full">

          {selected && (
            <CopyButton
              text={solusiText}
              label="Bracket + Solusi"
            />
          )}

          <SolusiDisplay
            key={selectedId}
            value={solusiText}
            onChange={setSolusiText}
          />

        </div>

      </div>

    </div>
  );
};

export default TiketPages;