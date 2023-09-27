export const formatTime = (dateString: string): string => {
  const date = new Date(dateString);
  const localDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
  return `${localDate.getHours()}:${String(localDate.getMinutes()).padStart(
    2,
    "0"
  )}`;
};
