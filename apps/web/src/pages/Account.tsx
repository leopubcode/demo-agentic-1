import { useAuth } from "../auth/useAuth";
import { useI18n } from "../i18n/useI18n";

// Signed-in users only (see RequireAuth in App.tsx).
export function Account() {
  const { user } = useAuth();
  const { t } = useI18n();

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
        {t("account.title")}
      </h1>
      <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-slate-600 dark:text-slate-400">
        <dt className="font-medium">{t("account.name")}</dt>
        <dd>{user?.displayName}</dd>
        <dt className="font-medium">{t("account.email")}</dt>
        <dd>{user?.email}</dd>
      </dl>
    </div>
  );
}
