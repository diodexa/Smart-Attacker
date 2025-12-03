import { useState } from "react";
import { FiCopy } from "react-icons/fi";

interface CopyButtonProps {
  text: string; // teks yang mau di-copy
}

const CopyButton = ({ text }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="mb-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
    >
        <FiCopy> {copied ? "Copied!" : "Copy"}</FiCopy>
    </button>
  );
};

export default CopyButton;
