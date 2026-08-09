import { useEffect, useState } from "react";
import Select from "react-select";
import { getMandatory } from "./MandatoryService";
import type { MandatoryData } from "./MandatoryService";
import { DataMandatory } from "./Mandatory";

interface Props {
  onSelect: (id: number | null) => void;
  selectedId: number | null;
  segment: string;
}

const MandatorySelect = ({
  onSelect,
  selectedId,
  segment,
}: Props) => {
  const [mandatory, setMandatory] = useState<MandatoryData[]>([]);

  // Data dari spreadsheet
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

  const normalizeCase = (v?: string) => v ?? "";

  // Kalau Email → ambil case dari mandatory.tsx
  // Selain Email → ambil case dari spreadsheet
  const options =
    segment === "Email"
      ? DataMandatory()
          .slice()
          .sort((a, b) =>
            normalizeCase(a.case)
              .toLocaleLowerCase()
              .localeCompare(
                normalizeCase(b.case).toLocaleLowerCase()
              )
          )
          .map(item => ({
            value: item.id,
            label: item.case,
          }))
      : mandatory
          .slice()
          .sort((a, b) =>
            normalizeCase(a.case)
              .toLocaleLowerCase()
              .localeCompare(
                normalizeCase(b.case).toLocaleLowerCase()
              )
          )
          .map(item => ({
            value: item.id,
            label: item.case,
          }));

  return (
    <Select
      options={options}
      className="w-full listText"
      onChange={(option) =>
        onSelect(option?.value ?? null)
      }
      value={
        options.find(
          option => option.value === selectedId
        ) || null
      }
      styles={{
        control: (base) => ({
          ...base,
          backgroundColor: "rgb(238, 255, 249)",
        }),

        menu: (base) => ({
          ...base,
          backgroundColor: "rgb(235, 250, 247)",
        }),

        option: (base, state) => ({
          ...base,
          backgroundColor: state.isFocused
            ? "#f6e387"
            : "transparent",
        }),
      }}
    />
  );
};

export default MandatorySelect;