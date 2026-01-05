interface Props {
  value: string;
  onChange: (val: string) => void;
}

const SolusiDisplay = ({ value, onChange }: Props) => {
  return (
    <textarea
      className="p-2 w-full h-screen border-2 resize-none"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      
    />

    
  );
};

export default SolusiDisplay;
