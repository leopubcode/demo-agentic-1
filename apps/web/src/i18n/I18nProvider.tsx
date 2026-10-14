import { useMemo, useState, useSyncExternalStore, type ReactNode } from "react";
import { i18nContext, type I18n } from "./i18nContext";
import { createLanguageStore, type LanguageStore } from "./languageStore";
import { translate } from "./translations";

export function I18nProvider({
  store: injectedStore,
  children,
}: {
  store?: LanguageStore;
  children: ReactNode;
}) {
  const [store] = useState(() => injectedStore ?? createLanguageStore());
  const language = useSyncExternalStore(store.subscribe, store.getSnapshot);

  const value = useMemo<I18n>(
    () => ({
      language,
      setLanguage: store.setLanguage,
      t: (key, params) => translate(language, key, params),
    }),
    [language, store],
  );

  return <i18nContext.Provider value={value}>{children}</i18nContext.Provider>;
}
