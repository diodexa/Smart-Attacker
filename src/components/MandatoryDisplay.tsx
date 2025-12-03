import { DataMandatory } from "./Mandatory";

interface Props {
  selectedId: number | null;
}

const MandatoryDisplay = ({ selectedId }: Props) => {
  const Mandatory = DataMandatory();
  const selected = Mandatory.find(item => item.id === selectedId);

  if (!selected) return <p className="mt-4 text-gray-500">Silakan pilih case terlebih dahulu</p>;

  return (
  
    <p className="mt-4  text-lg font-medium" style={{whiteSpace:"pre-line"}}>
    {selected.Mandatory}
  </p>
  );
};

export default MandatoryDisplay;
