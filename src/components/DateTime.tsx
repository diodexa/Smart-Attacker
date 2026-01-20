export const getCurrentDateTime = () => {
  const now = new Date();
  const date = now.toLocaleDateString("id-ID");
  const time = now.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${date} ${time}`;
};

export const getCurrentDate = () => {
  const now = new Date();
  return now.toLocaleDateString("id-ID");
};
