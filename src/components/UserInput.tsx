import { useState } from "react";

interface Props {
  onChange: (data: { nomor: string; email: string }) => void;
}

const UserInput = ({ onChange }: Props) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const input = e.target.value;
    setValue(input);

    const nomorMatch = input.match(/nomor\s*:\s*(.*)/i);
    const emailMatch = input.match(/email\s*:\s*(.*)/i);

    onChange({
      nomor: nomorMatch ? nomorMatch[1].trim() : "",
      email: emailMatch ? emailMatch[1].trim() : "",
    });
  };

  return (
    <textarea
      value={value}
      onChange={handleChange}
      className="border p-2 w-full"
      placeholder={`Contoh input:
nomor : 081234567
email : tes@gmail.com`}
    />
  );
};

export default UserInput;
