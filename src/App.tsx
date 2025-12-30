import { useEffect, useRef, useState } from "react";
import TiketPages from "./pages/Tiket";
import TemplatePages from "./pages/Template";

export default function App() {
  const [activeTab, setActiveTab] = useState("notepad");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  // Konten notepad tetap disimpan saat pindah tab
  const [note, setNote] = useState(() => {
    const saved = localStorage.getItem("my-note");
    return saved ? saved : "";
  });

  useEffect(() => {
    if (note !== "") {
      localStorage.setItem("my-note", note);
    }
  }, [note]);
  useEffect(() => {
    if (activeTab === "notepad" && textareaRef.current) {
      textareaRef.current.focus(); 
      textareaRef.current.setSelectionRange(textareaRef.current.value.length,textareaRef.current.value.length)
    }
  }, [activeTab]);

  return (
    <div className="flex flex-col ">
      {/* TAB BUTTONS */}
      <div className="flex gap-2 p-2 border-b">
        <button
          className={`border px-4 ${activeTab === "notepad" && "bg-yellow-200 text-black"}`}
          onClick={() => setActiveTab("notepad")}
        >
          Notepad
        </button>

        <button
          className={`border px-4 ${activeTab === "tiket" && "bg-yellow-200 text-black"}`}
          onClick={() => setActiveTab("tiket")}
        >
          Mandatory
        </button>
        <button
          className={`border px-4 ${activeTab === "Template" && "bg-yellow-200 text-black"}`}
          onClick={() => setActiveTab("Template")}
        >
          Template
        </button>
      </div>

      {/* TAB CONTENT */}
      <div className="flex p-2 h-screen">
        {activeTab === "notepad" && (
          <textarea
          ref={textareaRef}
          className="border w-full h-full p-2"
          placeholder="Tulis catatan kamu…"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          />
        )}

        {activeTab === "tiket" && (
          <TiketPages />
        )}
        {activeTab === "Template" && (
          <TemplatePages />
        )}
      </div>
    </div>
  );
}
