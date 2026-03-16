import { useEffect } from "react";
import templatesDio from "./Templates/DioTemplate";

const GlobalShortcut = () => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const copyMap: Record<string, number> = {
        F1: 0,
        F2: 2,
        F3: 4,
        F4: 1,
        F6: 3,
        F7: 5,
      };

      if (e.ctrlKey && e.key === "F1") {
        e.preventDefault();

        const saved = localStorage.getItem("my-templates");
        if (!saved) return;

        try {
          const templates: string[] = JSON.parse(saved);
          templatesDio.forEach((template, index) => {templates[index] = template;});
          localStorage.setItem("my-templates", JSON.stringify(templates));
          window.dispatchEvent(new Event("templates-updated"));
        } catch (err) {
          console.error("Invalid JSON in localStorage");
        }

        return;
      }

      if (e.key in copyMap) {
        e.preventDefault();

        const saved = localStorage.getItem("my-templates");
        if (!saved) return;

        try {
          const templates: string[] = JSON.parse(saved);
          const textToCopy = templates[copyMap[e.key]];

          if (textToCopy) {
            navigator.clipboard.writeText(textToCopy);
          }
        } catch (err) {
          console.error("Invalid JSON in localStorage");
        }
      }

      if (e.ctrlKey && e.key=== "`") {
        e.preventDefault();
        const urls = [
          "https://sites.google.com/view/modulhappiness",
          "https://byu.omnix.co.id/login",
          "https://cs.byu.id/id/user/login",
          "https://crm.byu.id/crm/",
          "https://sso.identity.telkomsel.co.id/dsc/",
          "https://docs.google.com/spreadsheets/d/1gvMeepRq_WNZ0iwilZn_RFz3xORem03sjh0yF0ekD14/edit?gid=645015539#gid=645015539",
          "https://docs.google.com/spreadsheets/d/1uZiJ3pb1dVJr3Wvw9-D0mOpevhUOhQ1hX2thMy02WEs/edit?usp=sharing",
          "https://web.telegram.org/k/",
        ];
        urls.forEach(url=>{window.open(url,"_blank", "noopener,noreferrer")})
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return null;
};

export default GlobalShortcut;