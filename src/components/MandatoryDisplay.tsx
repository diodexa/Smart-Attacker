import { useLayoutEffect, useRef,  } from "react";
import { useUndoRedo } from "../Hooks/useUndoRedo";

interface Props {
  selectedId: number | null;
  value: string;
  onChange: (v: string) => void;
}


const MandatoryDisplay = ({ value, onChange }: Props) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const cursorRef = useRef<number | null>(null);
  const prevNoteRef = useRef("");

  const {push, undo, redo} = useUndoRedo();

  const normalizeNumberedList = (text: string) => {
    const lines = text.split("\n");
    let counter = 1;

    for (let i = 0; i < lines.length; i++) {
      if (lines[i].trim() === "") {
        counter = 1;
        continue;
      }

      const m = lines[i].match(/^(\d+)\.\s*(.*)/);
      if (!m) {
        counter = 1;
        continue;
      }

      lines[i] = `${counter}. ${m[2]}`;
      counter++;
    }

    return lines.join("\n");
  };

  

  const updateValue = (text: string, cursor: number) => {
    push(text, cursor);
    onChange(text);
    cursorRef.current = cursor;
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target;
    let newValue = textarea.value;
    const cursorPos = textarea.selectionStart;

    // const prevLines = prevNoteRef.current.split("\n");
    // const newLines = newValue.split("\n");



    if (newValue.split("\n").length < prevNoteRef.current.split("\n").length) {
      newValue = normalizeNumberedList(newValue);
    }

    // terjadi penghapusan baris


    cursorRef.current = cursorPos;
    updateValue(newValue, cursorPos);
    prevNoteRef.current = newValue;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z") {
      e.preventDefault();
      if (e.shiftKey) {
        const redoState = redo();
        if (redoState) {
          onChange(redoState.value);
          cursorRef.current = redoState.cursor;
        }
      } else {
        const undoState = undo();
        if (undoState) {
          onChange(undoState.value);
          cursorRef.current = undoState.cursor;
        }
      }
      return;
    }

    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "y") {
      e.preventDefault();
      const redoState = redo();
      if (redoState) {
        onChange(redoState.value);
        cursorRef.current = redoState.cursor;
      }
      return;
    }

    if (e.key !== "Enter") return;
    if ((e.key == "Enter") && e.shiftKey) return

    const renumberFrom = (lines: string[], startIndex: number) => {
      let counter = 1;

      // cari nomor awal dari baris sebelumnya
      for (let i = startIndex - 1; i >= 0; i--) {
        const m = lines[i].match(/^(\d+)\./);

        if (lines[i].trim() === "") break;
        if (m) {
          counter = Number(m[1]) + 1;
          break;
        }
      }

      // renumber ke bawah
      for (let i = startIndex; i < lines.length; i++) {
        const m = lines[i].match(/^(\d+)\.\s*(.*)/);
        if (!m) break;

        if (lines[i].trim() === "") break;

        lines[i] = `${counter}. ${m[2]}`;
        counter++;
      }
    };

  const textarea = e.currentTarget;
  const cursorPos = textarea.selectionStart;

  const before = value.slice(0, cursorPos);

  const linesBefore = before.split("\n");
  const currentLineIndex = linesBefore.length - 1;
  const currentLine = linesBefore[currentLineIndex];

  const match = currentLine.match(/^(\d+)\.\s*/);
  if (!match) return;

  e.preventDefault();

  const insertNumber = Number(match[1]) + 1;
  const allLines = value.split("\n");

  // sisipkan baris baru
  allLines.splice(currentLineIndex + 1, 0, `${insertNumber}. `);

  renumberFrom(allLines, currentLineIndex + 2);

  const newText = allLines.join("\n");
  const newCursorPos = before.length + `\n${insertNumber}. `.length;

  before.length + `\n${insertNumber}. `.length;
  updateValue(newText, newCursorPos);
    
  onChange(newText);
  setTimeout(() => {
      textareaRef.current?.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
};


  // 🔥 restore cursor setelah render
  useLayoutEffect(() => {
    if (cursorRef.current !== null && textareaRef.current) {
        textareaRef.current.setSelectionRange(
        cursorRef.current,
        cursorRef.current
      );
      cursorRef.current = null;
    }
  }, [value]);

  

  return (
    <textarea
      ref={textareaRef}
      className="p-2 w-full h-screen border-2"
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder="Pilih dulu kategorinya ....."
    />
  );
};

export default MandatoryDisplay;




// import { DataMandatory } from "./Mandatory";

// interface Props {
//   selectedId: number | null;

// }

// const MandatoryDisplay = ({ selectedId }: Props) => {
//   const Mandatory = DataMandatory();
//   const selected = Mandatory.find(item => item.id === selectedId);

//   if (!selected) return <p className="mt-4 text-gray-500">Silakan pilih case terlebih dahulu</p>;

//   return (
  
//     <p className=" p-2 w-full h-screen border-2" style={{whiteSpace:"pre-line"}} >
//     {selected.Mandatory}
//     </p>
//   );
// };

// export default MandatoryDisplay;


