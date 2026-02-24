import { useState } from "react";


interface CopyButtonProps {
  text: string; // teks yang mau di-copy
  label: string;

}

const CopyButton = ({ text,label }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const cleanedText = text
      .split("\n")
      .map(line => line.trim())
      .join("\n")
      .trim();

    navigator.clipboard.writeText(cleanedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 500);
  };


  return (
    <button
      onClick={handleCopy}
      className="flex w-full items-center justify-center mb-3 px-4 py-2 items-center text-center rounded-md hover:bg-yellow-200 hover:text-black transition border-2 border-solid bg-gray-500 text-white"
    >
      <p className= {` ${copied ? "invisible!" : "visible"}`}>{copied ? "copy!" : label }</p>
      <p className=" m-0 text-center"> {copied? "anjay" : ""} </p>
    </button>
  );
};

export default CopyButton;
