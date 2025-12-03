import Select from "react-select";
import { DataMandatory } from "./Mandatory";

interface Props {
  onSelect: (id: number | null) => void;
}

const MandatorySelect = ({ onSelect }: Props) => {
  const Mandatory = DataMandatory();

  return (
    <Select
      options={Mandatory.map(item => ({
        value: item.id,
        label: item.case,
      }))}
      className="w-full"
      onChange={(option) => onSelect(option?.value || null)}
      styles={{
        control: (base) => ({
          ...base,
          width: "100%",
        }),
      }}
    />
  );
};

export default MandatorySelect;
