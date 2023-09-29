export function toTitleCase(str: string) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function getFormattedName(name: any) {
  return name ? toTitleCase(name) : "Usuário";
}

export const formatDate = (input: string | undefined): string => {
  if (!input) return "";

  const date = new Date(input);

  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = date.getUTCFullYear();

  return `${day}/${month}/${year}`;
};

export const DateParms = new Date()
  .toISOString()
  .split("T")[0]
  .replace(/-/g, "/");
