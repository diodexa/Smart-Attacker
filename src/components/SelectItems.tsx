import Select from "react-select";
import { DataMandatory } from "./Mandatory";

interface Props {
  onSelect: (id: number | null) => void;
}

const MandatorySelect = ({ onSelect }: Props) => {
  const Mandatory = DataMandatory().slice().sort((a,b)=>a.case.localeCompare(b.case))

  return (
    <Select
      options={Mandatory.map(item => ({
        value: item.id,
        label: item.case,
        
      }))}
      className="w-full  listText"
      onChange={(option) => onSelect(option?.value || null)}
      styles={{
        control: (base) => ({ ...base, backgroundColor: "#f6fbe0ff" }),
        menu: (base) => ({ ...base, backgroundColor: "#f6fbe0ff" }),
        
      }}
    />
  );
};

export default MandatorySelect;
