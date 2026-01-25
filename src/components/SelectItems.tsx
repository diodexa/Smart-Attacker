import Select from "react-select";
import { DataMandatory } from "./Mandatory";

interface Props {
  onSelect: (id: number | null) => void;
}

const MandatorySelect = ({ onSelect }: Props) => {
  const normalizeCase = (v?: string) => v ?? "";
  const Mandatory = DataMandatory().slice().sort((a,b)=>normalizeCase(a.case).toLocaleLowerCase().localeCompare(normalizeCase(b.case).toLocaleLowerCase()))

  return (
    <Select
      options={Mandatory.map(item => ({value: item.id,label: item.case,}))}
      className="w-full  listText"
      onChange={(option) => onSelect(option?.value || null)}
      styles={{
        control: (base) => ({ ...base, backgroundColor: " rgb(238, 255, 249)" }),
        menu: (base) => ({ ...base, backgroundColor: "rgb(235, 250, 247)" }),
        option: (base, state) => ({...base,backgroundColor: state.isFocused? "#f6e387": "transparent"
    }),
      }}
    />
  );
};

export default MandatorySelect;
