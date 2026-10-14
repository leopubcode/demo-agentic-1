import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./auth/AuthProvider";
import { RequireAuth } from "./auth/RequireAuth";
import { tokenStore } from "./auth/tokenStore";
import { useAuth } from "./auth/useAuth";
import { I18nProvider } from "./i18n/I18nProvider";
import { LanguagePicker } from "./i18n/LanguagePicker";
import { useI18n } from "./i18n/useI18n";
import { TRPCProvider } from "./trpc";
import { createAppTRPCClient } from "./trpcClient";
import { Test } from "./Test";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Account } from "./pages/Account";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Upload } from "./pages/Upload";
import { VerifyEmail } from "./pages/VerifyEmail";

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client
        staleTime: 60 * 1000,
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (!browserQueryClient) {
    browserQueryClient = makeQueryClient();
  }

  return browserQueryClient;
}

const navLink =
  "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 font-medium";

function AuthNav() {
  const { status, user, signOut } = useAuth();
  const { t } = useI18n();

  if (status === "loading") {
    return null;
  }
  if (status === "signedOut") {
    return (
      <>
        <Link to="/signin" className={navLink}>
          {t("nav.signIn")}
        </Link>
        <Link to="/signup" className={navLink}>
          {t("nav.signUp")}
        </Link>
      </>
    );
  }
  return (
    <>
      <Link to="/account" className={navLink}>
        {user!.email}
      </Link>
      <button type="button" onClick={signOut} className={navLink}>
        {t("nav.signOut")}
      </button>
    </>
  );
}

function Nav() {
  const { t } = useI18n();

  return (
    <nav className="border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 flex gap-6 py-3">
        <Link
          to="/"
          className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 font-medium"
        >
          {t("nav.home")}
        </Link>
        <Link
          to="/about"
          className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 font-medium"
        >
          {t("nav.about")}
        </Link>
        <Link
          to="/upload"
          className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 font-medium"
        >
          {t("nav.upload")}
        </Link>
        <div className="ml-auto flex items-center gap-6">
          <LanguagePicker />
          <AuthNav />
        </div>
      </div>
    </nav>
  );
}

export function App() {
  const queryClient = getQueryClient();
  const [trpcClient] = useState(() =>
    createAppTRPCClient("http://localhost:4000/trpc", tokenStore),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
        <AuthProvider tokens={tokenStore}>
          <I18nProvider>
            <BrowserRouter>
              <Nav />
              <main>
                <Routes>
                  <Route
                    path="/"
                    element={
                      <>
                        <Home />
                        <div className="max-w-2xl mx-auto px-4 pb-12">
                          <Test />
                        </div>
                      </>
                    }
                  />
                  <Route path="/about" element={<About />} />
                  <Route path="/upload" element={<Upload />} />
                  <Route path="/signin" element={<SignIn />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/verify-email" element={<VerifyEmail />} />
                  <Route
                    path="/account"
                    element={
                      <RequireAuth>
                        <Account />
                      </RequireAuth>
                    }
                  />
                </Routes>
              </main>
            </BrowserRouter>
          </I18nProvider>
        </AuthProvider>
      </TRPCProvider>
    </QueryClientProvider>
  );
}
