import {  useState } from "react";
import TiketPages from "./pages/Tiket";
import TemplatePages from "./pages/Template";
import DarkMode from "./components/ButtonDarkLight";
import NotePages from "./pages/Note";
import GlobalShortcut from "./components/GlobalShortcut";

export default function App() {
  const [activeTab, setActiveTab] = useState("notepad");


  return (
    <div className="flex flex-col ">
      <GlobalShortcut/>
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
      <div className="flex ">
        {activeTab === "notepad" && (
          <NotePages/>
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
