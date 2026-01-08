export const normalizeNumberedList = (text: string) => {
  const lines = text.split("\n");
  let counter = 1;

  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^(\d+)\.\s*(.*)/);
    if (!m) continue;

    lines[i] = `${counter}. ${m[2]}`;
    counter++;
  }

  return lines.join("\n");
};
