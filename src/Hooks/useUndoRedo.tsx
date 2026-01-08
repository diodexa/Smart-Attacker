import { useRef } from "react";

type State = {
  value: string;
  cursor: number;
};

export function useUndoRedo() {
  const undoStack = useRef<State[]>([]);
  const redoStack = useRef<State[]>([]);

  const push = (value: string, cursor: number) => {
    const last = undoStack.current[undoStack.current.length - 1];
    if (last && last.value === value) return; // jangan push duplicate
    undoStack.current.push({ value, cursor });
    redoStack.current = [];
  };

  const undo = () => {
    const last = undoStack.current.pop();
    if (!last) return null;
    redoStack.current.push(last);
    return last;
  };

  const redo = () => {
    const last = redoStack.current.pop();
    if (!last) return null;
    undoStack.current.push(last);
    return last;
  };

  return { push, undo, redo };
}
