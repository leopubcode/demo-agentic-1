import { Link } from "react-router-dom";
import { useI18n } from "../i18n/useI18n";

const features = ["water", "photo", "light"] as const;

const bevelButton =
  "border-4 border-t-white border-l-white border-b-gray-600 border-r-gray-600 bg-gray-300 px-5 py-2 font-bold text-black underline hover:bg-yellow-200";

export function Home() {
  const { t } = useI18n();

  return (
    <div
      className="min-h-screen bg-fuchsia-700 px-4 py-10 text-black"
      style={{ fontFamily: '"Comic Sans MS", "Comic Sans", cursive' }}
    >
      <div className="mx-auto max-w-3xl border-8 border-double border-yellow-300 bg-lime-200 p-6">
        <section className="text-center">
          <h1 className="text-6xl font-bold text-fuchsia-700 [text-shadow:3px_3px_0_#fde047]">
            {t("home.title")}
          </h1>
          <p className="mt-2 text-xl font-bold text-blue-800">
            {t("home.tagline")}
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link to="/signup" className={bevelButton}>
              {t("home.getStarted")}
            </Link>
            <Link to="/about" className={bevelButton}>
              {t("home.learnMore")}
            </Link>
          </div>
        </section>

        <hr className="my-8 border-t-4 border-dashed border-fuchsia-700" />

        <section className="grid gap-4 sm:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature}
              className="border-4 border-t-white border-l-white border-b-gray-600 border-r-gray-600 bg-yellow-100 p-4"
            >
              <h2 className="font-bold text-red-600 underline">
                {t(`home.feature.${feature}.title`)}
              </h2>
              <p className="mt-2 text-sm">
                {t(`home.feature.${feature}.body`)}
              </p>
            </div>
          ))}
        </section>

        <p className="mt-8 text-center text-sm">
          {t("home.visitor")}{" "}
          <span className="bg-black px-1 font-mono text-lime-400">001337</span>
        </p>
      </div>
    </div>
  );
}
