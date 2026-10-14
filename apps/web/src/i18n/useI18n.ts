import { useContext } from "react";
import { i18nContext } from "./i18nContext";

export function useI18n() {
  return useContext(i18nContext);
}
