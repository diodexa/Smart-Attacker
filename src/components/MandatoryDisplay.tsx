interface Props {
  selectedId: number | null;
  value: string;
  onChange: (v: string) => void;
}

const MandatoryDisplay = ({ value, onChange }: Props) => {
  return (
    <textarea
      className="p-2 w-full h-screen border-2"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default MandatoryDisplay;



// import { DataMandatory } from "./Mandatory";

// interface Props {
//   selectedId: number | null;

// }

// const MandatoryDisplay = ({ selectedId }: Props) => {
//   const Mandatory = DataMandatory();
//   const selected = Mandatory.find(item => item.id === selectedId);

//   if (!selected) return <p className="mt-4 text-gray-500">Silakan pilih case terlebih dahulu</p>;

//   return (
  
//     <p className=" p-2 w-full h-screen border-2" style={{whiteSpace:"pre-line"}} >
//     {selected.Mandatory}
//     </p>
//   );
// };

// export default MandatoryDisplay;


