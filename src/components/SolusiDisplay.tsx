import { DataMandatory } from "./Mandatory";

interface Props {
  selectedId: number | null;
  onValueChange?: (text: string) => void; 
}


const MandatoryDisplay = ({ selectedId }: Props) => {
  const Mandatory = DataMandatory();
  const selected = Mandatory.find(item => item.id === selectedId);

  if (!selected) return <p className="mt-4 text-gray-500">Silakan pilih case terlebih dahulu</p>;

  return (
    <p className="p-2 w-full h-full border-2" style={{whiteSpace:"pre-line"}}>
    {selected.Solusi}
  </p>
  );
};

export default MandatoryDisplay;
