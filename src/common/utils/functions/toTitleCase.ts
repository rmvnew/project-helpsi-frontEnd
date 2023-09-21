export function toTitleCase(str: string) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

export function getFormattedName(name: any) {
    return name ? toTitleCase(name) : "Usuário";
}
