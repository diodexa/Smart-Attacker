import { useEffect, useState } from "react";
import List from "../components/SelectItems";
import { DataMandatory } from "../components/Mandatory";
import CopyButton from "../components/CopyButton";
import MandatoryDisplay from "../components/MandatoryDisplay";
import SolusiDisplay from "../components/SolusiDisplay";
import { getCurrentDateTime } from "../components/DateTime";

type Props = {
  segment: string;
};

const TiketPagesManual = ({ segment }: Props) => {
  const [selectedId, setSelectedId] = useState<number | null>(() => {
    const saved = localStorage.getItem("selectedId");
    return saved ? Number(saved) : null;
  });

  const [mandatoryText, setMandatoryText] = useState("");
  const [solusiText, setSolusiText] = useState("");

  // =========================
  // DATA DARI MANDATORY.TSX
  // =========================

  const mandatory = DataMandatory();

  const selected = mandatory.find(
    (item) => item.id === selectedId
  );

  // =========================
  // UPDATE TEMPLATE
  // =========================

  useEffect(() => {
    if (!selected) return;

    localStorage.setItem(
      "selectedId",
      String(selectedId)
    );

    const createdDate = getCurrentDateTime();

    // =========================
    // MANDATORY
    // =========================

    const mandatoryResult =
      typeof selected.Mandatory === "function"
        ? selected.Mandatory(segment, createdDate)
        : selected.Mandatory;

    setMandatoryText(mandatoryResult);

    // =========================
    // SOLUSI
    // =========================

    const solusi =
      typeof selected.Solusi === "function"
        ? selected.Solusi(segment)
        : selected.Solusi;

    const bracket =
      typeof selected.Bracket === "function"
        ? selected.Bracket(segment)
        : selected.Bracket;

    const combinedSolusi = [
      bracket,
      solusi,
    ]
      .filter(Boolean)
      .join("\n\n");

    setSolusiText(combinedSolusi);

  }, [selectedId, segment]);

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

        setMandatoryText((prev) =>
          prev.replace(
            /xxxxxx/g,
            clipboardText
          )
        );

        setSolusiText((prev) =>
          prev.replace(
            /xxxxxx/g,
            clipboardText
          )
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

        setMandatoryText((prev) =>
          prev.replace(
            /\u200B{2}/g,
            clipboardText
          )
        );

        setSolusiText((prev) =>
          prev.replace(
            /\u200B{2}/g,
            clipboardText
          )
        );
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };

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

export default TiketPagesManual;