import { useI18n } from "../i18n/useI18n";

export function Home() {
  const { t } = useI18n();

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
        {t("home.title")}
      </h1>
      <p className="mt-4 text-slate-600 dark:text-slate-400">
        {t("home.body")}
      </p>
    </div>
  );
}
