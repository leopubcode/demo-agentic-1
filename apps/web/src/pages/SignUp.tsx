import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";
import { useI18n } from "../i18n/useI18n";
import {
  AuthForm,
  errorMessage,
  Field,
  FormMessage,
  SubmitButton,
} from "../components/AuthForm";

export function SignUp() {
  const { signUp } = useAuth();
  const { t } = useI18n();
  const navigate = useNavigate();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string>();

  const submit = async (form: FormData) => {
    setPending(true);
    setError(undefined);
    try {
      const { email } = await signUp({
        email: String(form.get("email")),
        password: String(form.get("password")),
        displayName: String(form.get("displayName")),
      });
      navigate(`/verify-email?email=${encodeURIComponent(email)}`);
    } catch (caught) {
      setError(errorMessage(caught, t("auth.genericError")));
    } finally {
      setPending(false);
    }
  };

  return (
    <AuthForm title={t("signUp.title")} onSubmit={submit}>
      <Field
        label={t("auth.name")}
        name="displayName"
        autoComplete="name"
        required
      />
      <Field
        label={t("auth.email")}
        name="email"
        type="email"
        autoComplete="email"
        required
      />
      <Field
        label={t("auth.password")}
        name="password"
        type="password"
        autoComplete="new-password"
        minLength={8}
        required
      />
      <FormMessage tone="error">{error}</FormMessage>
      <SubmitButton pending={pending}>{t("signUp.submit")}</SubmitButton>
      <p className="text-sm text-slate-600 dark:text-slate-400">
        {t("signUp.haveAccount")}{" "}
        <Link to="/signin" className="underline">
          {t("signUp.signInLink")}
        </Link>
      </p>
    </AuthForm>
  );
}
