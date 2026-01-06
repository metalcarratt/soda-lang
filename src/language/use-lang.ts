import { languages } from './languages';

export const useLang = (lang: string) => {
  if (!languages.includes(lang)) {
    return {};
  }
  return { lang };
};
