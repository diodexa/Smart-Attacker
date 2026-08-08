import { useEffect, useState } from "react";
import Select from "react-select";
import { getMandatory } from "./MandatoryService";
import type { MandatoryData } from "./MandatoryService";

interface Props {
  onSelect: (id: number | null) => void;
  selectedId: number | null;
}

const MandatorySelect = ({ onSelect, selectedId }: Props) => {
  const [mandatory, setMandatory] = useState<MandatoryData[]>([]);

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

  const sortedMandatory = mandatory
    .slice()
    .sort((a, b) =>
      normalizeCase(a.case)
        .toLocaleLowerCase()
        .localeCompare(
          normalizeCase(b.case).toLocaleLowerCase()
        )
    );

  const options = sortedMandatory.map(item => ({
    value: item.id,
    label: item.case,
  }));

  return (
    <Select
      options={options}
      className="w-full listText"
      onChange={(option) => onSelect(option?.value ?? null)}
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