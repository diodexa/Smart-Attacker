import { useState } from "react";
import { FiCopy } from "react-icons/fi";

interface CopyButtonProps {
  text: string; // teks yang mau di-copy
}

const CopyButton = ({ text }: CopyButtonProps) => {
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
      className="flex w-full items-center justify-center mb-3 px-4 py-2 items-center text-center rounded-md hover:bg-yellow-200 hover:text-black transition border-2 border-solid"
    >
      <FiCopy className= {` ${copied ? "invisible!" : "visible"}`}>` ${copied ? "copy!" : "tidak"}`</FiCopy>
      <p className=" m-0 text-center"> {copied? "anjay" : ""} </p>
    </button>
  );
};

export default CopyButton;
