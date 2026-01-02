import { useEffect, useRef, useState } from "react";
import TiketPages from "./pages/Tiket";
import TemplatePages from "./pages/Template";
import DarkMode from "./components/ButtonDarkLight";

export default function App() {
  const [activeTab, setActiveTab] = useState("notepad");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const initializedRef = useRef(false);

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

  useEffect(() => {
    if (activeTab === "notepad" && note === "" && !initializedRef.current) {
      initializedRef.current=true;
    }
  }, [activeTab]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
  if (e.key !== "Enter") return;
  const textarea = e.currentTarget;
  const cursorPos = textarea.selectionStart;
  const textBeforeCursor = note.slice(0, cursorPos);
  const lines = textBeforeCursor.split("\n");
  const lastLine = lines[lines.length - 1];


  const match = lastLine.match(/^(\d+)\./);
  if (lastLine.trim() === "") return;
  if (!match) return; 

  e.preventDefault();

  const nextNumber = Number(match[1]) + 1;

  const newText =
    note.slice(0, cursorPos) +
    `\n${nextNumber}. ` +
    note.slice(cursorPos);

  setNote(newText);

  // jaga cursor tetap di posisi benar
  requestAnimationFrame(() => {
    const pos = cursorPos + (`\n${nextNumber}. `.length);
    textareaRef.current?.setSelectionRange(pos, pos);
  });
};


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
        <div className="absolute right-0 flex gap-1">
          <DarkMode/>
          <h1 className="text-3xl tracking-[.25em]">di<span className="text-red-600">N</span></h1>
        </div>
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
          onKeyDown={handleKeyDown}
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
