import { useEffect } from "react";

const GlobalShortcut = () => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "F1") {
        e.preventDefault();

        if (!confirm("Buka semua tools byU?")) return;

        const urls = [
          "https://byu.omnix.co.id/login",
          "https://cs.byu.id/id/user/login",
          "https://crm.byu.id/crm/",
          "https://sso.identity.telkomsel.co.id/dsc/",
          "https://sites.google.com/view/modulhappiness",
          "https://docs.google.com/spreadsheets/d/1uZiJ3pb1dVJr3Wvw9-D0mOpevhUOhQ1hX2thMy02WEs/edit?usp=sharing",
          "https://web.telegram.org/k/"
        ];

        urls.forEach(url => {
          window.open(url, "_blank", "noopener,noreferrer");
        });
      }
      if (e.key === "F1") {
        e.preventDefault(); 

        const saved = localStorage.getItem("my-templates");
        if (!saved) return;

        const templates: string[] = JSON.parse(saved);
        const textToCopy = templates[0];

        if (textToCopy) {
          navigator.clipboard.writeText(textToCopy);
        }
      }
      if (e.key === "F2") {
        e.preventDefault(); 

        const saved = localStorage.getItem("my-templates");
        if (!saved) return;

        const templates: string[] = JSON.parse(saved);
        const textToCopy = templates[2];

        if (textToCopy) {
          navigator.clipboard.writeText(textToCopy);
        }
      }
      if (e.key === "F3") {
        e.preventDefault(); 

        const saved = localStorage.getItem("my-templates");
        if (!saved) return;

        const templates: string[] = JSON.parse(saved);
        const textToCopy = templates[4];

        if (textToCopy) {
          navigator.clipboard.writeText(textToCopy);
        }
      }
      if (e.key === "F4") {
        e.preventDefault(); 

        const saved = localStorage.getItem("my-templates");
        if (!saved) return;

        const templates: string[] = JSON.parse(saved);
        const textToCopy = templates[1];

        if (textToCopy) {
          navigator.clipboard.writeText(textToCopy);
        }
      }
      
      if (e.key === "F6") {
        e.preventDefault(); 

        const saved = localStorage.getItem("my-templates");
        if (!saved) return;

        const templates: string[] = JSON.parse(saved);
        const textToCopy = templates[3];

        if (textToCopy) {
          navigator.clipboard.writeText(textToCopy);
        }
      }
      
      if (e.key === "F7") {
        e.preventDefault(); 

        const saved = localStorage.getItem("my-templates");
        if (!saved) return;

        const templates: string[] = JSON.parse(saved);
        const textToCopy = templates[5];

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
