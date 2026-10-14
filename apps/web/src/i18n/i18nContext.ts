import { createContext } from "react";
import {
  translate,
  type Language,
  type TranslateParams,
  type TranslationKey,
} from "./translations";

export type I18n = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey, params?: TranslateParams) => string;
};

// Without a provider the app reads as English and the picker does nothing.
export const i18nContext = createContext<I18n>({
  language: "en",
  setLanguage: () => {},
  t: (key, params) => translate("en", key, params),
});
