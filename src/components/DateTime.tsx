

export const getCurrentDateTime = () => {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0")
  const month = String(now.getMonth() + 1).padStart(2, "0")
  const year = now.getFullYear()
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  // const time = now.toLocaleTimeString("id-ID", {hour: "2-digit",minute: "2-digit",hour12: false});
  return `${day}/${month}/${year} ${hh}:${mm}`;
}



export const getCurrentDate = () => {
  const now = new Date()

  const day = String(now.getDate()).padStart(2, "0")
  const month = String(now.getMonth() + 1).padStart(2, "0")
  const year = now.getFullYear()

  return `${day}/${month}/${year}`
}
