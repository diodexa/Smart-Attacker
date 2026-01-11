import { useEffect } from "react";

const GlobalShortcut = () => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "F1") {
        e.preventDefault(); // ❗ cegah help browser

        const saved = localStorage.getItem("my-templates");
        if (!saved) return;

        const templates: string[] = JSON.parse(saved);
        const textToCopy = templates[0];

        if (textToCopy) {
          navigator.clipboard.writeText(textToCopy);
        }
      }
      if (e.key === "F2") {
        e.preventDefault(); // ❗ cegah help browser

        const saved = localStorage.getItem("my-templates");
        if (!saved) return;

        const templates: string[] = JSON.parse(saved);
        const textToCopy = templates[2];

        if (textToCopy) {
          navigator.clipboard.writeText(textToCopy);
        }
      }
      if (e.key === "F3") {
        e.preventDefault(); // ❗ cegah help browser

        const saved = localStorage.getItem("my-templates");
        if (!saved) return;

        const templates: string[] = JSON.parse(saved);
        const textToCopy = templates[4];

        if (textToCopy) {
          navigator.clipboard.writeText(textToCopy);
        }
      }
      if (e.key === "F4") {
        e.preventDefault(); // ❗ cegah help browser

        const saved = localStorage.getItem("my-templates");
        if (!saved) return;

        const templates: string[] = JSON.parse(saved);
        const textToCopy = templates[1];

        if (textToCopy) {
          navigator.clipboard.writeText(textToCopy);
        }
      }
      
      if (e.key === "F6") {
        e.preventDefault(); // ❗ cegah help browser

        const saved = localStorage.getItem("my-templates");
        if (!saved) return;

        const templates: string[] = JSON.parse(saved);
        const textToCopy = templates[3];

        if (textToCopy) {
          navigator.clipboard.writeText(textToCopy);
        }
      }
      
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return null;
};

export default GlobalShortcut;
