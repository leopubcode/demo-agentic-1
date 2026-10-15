import { LANGUAGES, LANGUAGE_NAMES, type Language } from "./translations";
import { useI18n } from "./useI18n";

export function LanguagePicker() {
  const { language, setLanguage, t } = useI18n();

  return (
    <select
      aria-label={t("nav.language")}
      value={language}
      onChange={(event) => setLanguage(event.target.value as Language)}
      className="rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-2 py-1 text-sm text-slate-700 dark:text-slate-300"
    >
      {LANGUAGES.map((code) => (
        <option key={code} value={code}>
          {LANGUAGE_NAMES[code]}
        </option>
      ))}
    </select>
  );
}
