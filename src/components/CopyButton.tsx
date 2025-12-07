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
    setTimeout(() => setCopied(false), 2000);
  };


  return (
    <button
      onClick={handleCopy}
      className="flex mb-3 px-4 py-2 items-center justify-center text-center rounded-md hover:bg-blue-700 transition border-2 border-solid"
    >
        <FiCopy > {copied ? "Copied!" : "Copy"}</FiCopy>
    </button>
  );
};

export default CopyButton;
