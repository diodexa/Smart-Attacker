import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function NotePages() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const cursorRef = useRef<number | null>(null);
  const prevNoteRef = useRef("");

  const [note, setNote] = useState(() => {
    const saved = localStorage.getItem("my-note");
    return saved ?? "";
  });

  const normalizeNumberedList = (text: string) => {
  const lines = text.split("\n");
  let counter = 1;

  for (let i = 0; i < lines.length; i++) {
    // jika baris kosong, reset counter
    if (lines[i].trim() === "") {
      counter = 1;
      continue;
    }

    const m = lines[i].match(/^(\d+)\.\s*(.*)/);
    if (!m) continue;

    lines[i] = `${counter}. ${m[2]}`;
    counter++;
  }

  return lines.join("\n");
};

  useEffect(() => {
    localStorage.setItem("my-note", note);
  }, [note]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key !== "Enter") return;
      if (e.key == "Enter" && e.shiftKey) return;
      
    const textarea = e.currentTarget;
    const cursor = textarea.selectionStart;

    const before = note.slice(0, cursor);
    const after = note.slice(cursor);

    const lines = before.split("\n");
    const lastLine = lines[lines.length - 1];

    const match = lastLine.match(/^(\d+)\.\s*/);
    if (!match) return;

    e.preventDefault();

    const next = Number(match[1]) + 1;
    const newText = before + `\n${next}. ` + after;

    cursorRef.current =
      before.length + (`\n${next}. `.length);

    setNote(normalizeNumberedList(newText));
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target;
    const newValue = textarea.value;
    const cursorPos = textarea.selectionStart;

    const prevLines = prevNoteRef.current.split("\n");
    const newLines = newValue.split("\n");


    if (newLines.length < prevLines.length) {
        cursorRef.current = cursorPos;
        setNote(normalizeNumberedList(newValue));
    } else {
        setNote(newValue);
    }

    prevNoteRef.current = newValue;
  };

  useLayoutEffect(() => {
    if (cursorRef.current !== null && textareaRef.current) {
      textareaRef.current.setSelectionRange(
        cursorRef.current,
        cursorRef.current
      );
      cursorRef.current = null;
    }
  }, [note]);

  return (
    <textarea
      ref={textareaRef}
      value={note}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      className="border w-full h-screen p-2"
      placeholder="Isi note kamu....."
    />
  );
}
