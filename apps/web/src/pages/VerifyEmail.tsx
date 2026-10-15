import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useAuth } from "../auth/useAuth";
import { useI18n } from "../i18n/useI18n";
import {
  AuthForm,
  errorMessage,
  Field,
  FormMessage,
  SubmitButton,
} from "../components/AuthForm";

// The second step of signing up: following the link emailed to the new
// account. The link lands on the sign-in page once the email is verified.
export function VerifyEmail() {
  const { resendVerification } = useAuth();
  const { t } = useI18n();
  const [params] = useSearchParams();
  const [email, setEmail] = useState(params.get("email") ?? "");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string>();
  const [notice, setNotice] = useState<string>();

  const resend = async () => {
    setPending(true);
    setError(undefined);
    try {
      await resendVerification({ email });
      setNotice(t("verify.resent", { email }));
    } catch (caught) {
      setError(errorMessage(caught, t("auth.genericError")));
    } finally {
      setPending(false);
    }
  };

  return (
    <AuthForm title={t("verify.title")} onSubmit={resend}>
      <FormMessage tone="info">{notice ?? t("verify.emailed")}</FormMessage>
      <Field
        label={t("auth.email")}
        name="email"
        type="email"
        autoComplete="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <FormMessage tone="error">{error}</FormMessage>
      <SubmitButton pending={pending}>{t("verify.submit")}</SubmitButton>
      <p className="text-sm text-slate-600 dark:text-slate-400">
        {t("verify.alreadyVerified")}{" "}
        <Link
          to={`/signin?email=${encodeURIComponent(email)}`}
          className="underline"
        >
          {t("verify.signInLink")}
        </Link>
      </p>
    </AuthForm>
  );
}
