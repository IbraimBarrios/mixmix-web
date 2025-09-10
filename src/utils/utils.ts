export const lowerCaseText = (text: string) => {
  return text.toLowerCase();
};

export const underscoresToSpaces = (text: string) => {
  return text.replaceAll("_", " ");
};

export const spacesToUnderscores = (text: string) => {
  return text.replaceAll(" ", "_");
};
