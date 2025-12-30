import { useEffect, useState } from "react";
import { BsFillSunFill } from "react-icons/bs";
import { RiMoonClearFill } from "react-icons/ri";

export default function DarkMode() {
  const [dark, setDark] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-4 rounded transition-colors duration-500 relative overflow-hidden pointer-events-auto text-2xl"
      aria-label="Toggle dark mode"
    >
      <BsFillSunFill
        className={` absolute inset-0 m-auto transition-all duration-500 ${
          dark
            ? "opacity-0 scale-50 rotate-90"
            : "opacity-100 scale-150 rotate-0"
        }`}
      />
      <RiMoonClearFill
        className={`text-white absolute inset-0 m-auto transition-all duration-500 ${
          dark
            ? "opacity-100 scale-150 rotate-0"
            : "opacity-0 scale-50 rotate-90"
        }`}
      />
    </button>
  );
}
