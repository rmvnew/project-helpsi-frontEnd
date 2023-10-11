export const formatTimeString = (dateString: string): string => {
  const date = new Date(dateString);
  const localDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
  return `${localDate.getHours()}:${String(localDate.getMinutes()).padStart(
    2,
    "0"
  )}`;
};

export const formatTime = (dateString: Date): string => {
  const date = new Date(dateString);
  const localDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
  return `${localDate.getHours()}:${String(localDate.getMinutes()).padStart(
    2,
    "0"
  )}`;
};

const convertToManausTimezone = (date: Date) => {
  const offset = date.getTimezoneOffset() + 240;
  return new Date(date.getTime() + offset * 60 * 1000);
};

export const DayWeek = (inputDate: string): string => {
  const date = convertToManausTimezone(new Date(inputDate.split("T")[0]));

  const daysOfWeek = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];

  const dayName = daysOfWeek[date.getDay()];

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${dayName} - ${day}/${month}/${year}`;
};

const currentDate = new Date();

export const formattedCurrentDate = `${currentDate.getFullYear()}-${String(
  currentDate.getMonth() + 1
).padStart(2, "0")}-${String(currentDate.getDate()).padStart(2, "0")}`;

export const isValidScheduleTime = (dateTime: string) => {
  const selectedDate = new Date(dateTime);
  const hour = selectedDate.getHours();
  const dayOfWeek = selectedDate.getDay();

  if (hour < 8 || hour >= 18) {
    return false;
  }

  if (dayOfWeek === 0 || dayOfWeek === 6) {
    return false;
  }

  return true;
};
