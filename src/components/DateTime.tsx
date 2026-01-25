

export const getCurrentDateTime = () => {
  const now = new Date();
  const date = now.toLocaleDateString("id-ID");
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  // const time = now.toLocaleTimeString("id-ID", {hour: "2-digit",minute: "2-digit",hour12: false});
  return `${date} ${hh}:${mm}`;
}



export const getCurrentDate = () => {
  const now = new Date();
  return now.toLocaleDateString("id-ID");
};
