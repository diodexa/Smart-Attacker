import { useState } from "react";

export const ButtonCopyDummy = ()=> {
    const [copied, setCopied] = useState(false);
    
      const handleCopy = () => {
        const NomorDummy = "6285159940470"
          
    
        navigator.clipboard.writeText(NomorDummy);
        setCopied(true);
        setTimeout(() => setCopied(false), 500);
      };
    return (
        <div>
            <button onClick={handleCopy}
        className="flex w-full items-center justify-center px-1 items-center text-center rounded-md hover:bg-yellow-200 hover:text-black transition border-1 border-solid bg-transparent ">
            📱
        </button>
        {copied && 
            <p className={`absolute bg-gray-800 text-white z-100 text-sm ${copied? "visible!" : "invisible"}`} > {copied? "Copied" : ""} </p>
        }
        </div>
    )
}