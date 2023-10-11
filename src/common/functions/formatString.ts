export function toTitleCase(str: string) {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => {
        if (word === "do" || word === "da" || word === "de") {
          return word;
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }
  
  export function getFormattedName(name: any) {
    return name ? toTitleCase(name) : "Usuário";
  }


  export function getFirstNameFormatted(name: string) {
    if (!name) return '';
    const firstName = name.split(' ')[0]; // Pega apenas o primeiro nome
    return firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase(); // Primeira letra maiúscula e restante minúsculo
  }
  