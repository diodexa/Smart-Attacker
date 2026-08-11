import {  useEffect, useState } from "react";
import TiketPages from "./pages/TiketAPI";
import TemplatePages from "./pages/Template";
import DarkMode from "./components/ButtonDarkLight";
import NotePages from "./pages/Note";
import GlobalShortcut from "./components/GlobalShortcut";
import SegmentList from "./components/SegmentList";
import { ButtonCopyDummy } from "./components/ButtonCopyDummy";
import TiketPagesManual from "./pages/Tiket";

export default function App() {
  const [activeTab, setActiveTab] = useState("notepad");
  const [segment, setSegment] = useState(() => {
    return localStorage.getItem("segment") || "Live";
  });

  useEffect(() => {
    localStorage.setItem("segment", segment);
  }, [segment]);

  return (
    <div className="flex flex-col text-xs ">
      <GlobalShortcut/>
      {/* TAB BUTTONS */}
      <div className="flex gap-2 p-2 border-b">
        <button
          className={`border px-2 ${activeTab === "notepad" && "bg-yellow-200 text-black"}`}
          onClick={() => setActiveTab("notepad")}
        >
          Notepad
        </button>

        <button
          className={`border px-2 ${activeTab === "tiketManual" && "bg-yellow-200 text-black"}`}
          onClick={() => setActiveTab("tiketManual")}
        >
          Mandatory 1
        </button>

        <button
          className={`border px-2 ${activeTab === "tiket" && "bg-yellow-200 text-black"}`}
          onClick={() => setActiveTab("tiket")}
        >
          Mandatory 2
        </button>

        <button
          className={`border px-2 ${activeTab === "Template" && "bg-yellow-200 text-black"}`}
          onClick={() => setActiveTab("Template")}
        >
          Template
        </button>

        <ButtonCopyDummy/>


        <div className="ml-auto flex items-center gap-2">
          <SegmentList Segment={segment} onChange={setSegment}/>
        </div>


        <div className="absolute top-1 right-0 flex gap-1">
          <DarkMode/>
          <h1 className="text-3xl tracking-[.2em]">di<span className="text-red-600">N</span></h1>
        </div>
      </div>

      {/* TAB CONTENT */}
      <div className="flex ">
        {activeTab === "notepad" && (
          <NotePages/>
        )}

        {activeTab === "tiket" && (
          <TiketPages segment={segment} />
        )}
        
        {activeTab === "tiketManual" && (
          <TiketPagesManual segment={segment} />
        )}
        {activeTab === "Template" && (
          <TemplatePages />
        )}
      </div>
    </div>
  );
}
