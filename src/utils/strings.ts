export const clearTextSpace = (txt: string): string => {
    if (!txt) return '';

    return txt.trim().replace(/ /gi, '');
};
