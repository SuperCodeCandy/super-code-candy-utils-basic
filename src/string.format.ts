export const jsonParse = <D, T>(str: string, initValue?: T): T | undefined | D => {
  try {
    return JSON.parse(str);
  } catch {
    return initValue;
  }
};
