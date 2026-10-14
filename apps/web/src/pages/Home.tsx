import { Link } from "react-router-dom";

const features = [
  {
    title: "Water reminders",
    body: "Know exactly when each plant is thirsty, based on its species and your home.",
  },
  {
    title: "Photo journal",
    body: "Upload a photo every week and watch your plants grow over time.",
  },
  {
    title: "Light matching",
    body: "Tell us which window you have and we'll suggest plants that will thrive.",
  },
];

export function Home() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <section className="text-center">
        <h1 className="text-5xl font-bold text-slate-800 dark:text-slate-100">
          Leafy
        </h1>
        <p className="mt-4 text-xl text-slate-600 dark:text-slate-400">
          Keep your houseplants happy, without the guesswork.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/signup"
            className="rounded-md bg-emerald-600 px-5 py-2.5 font-medium text-white hover:bg-emerald-700"
          >
            Get started
          </Link>
          <Link
            to="/about"
            className="rounded-md border border-slate-300 dark:border-slate-600 px-5 py-2.5 font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Learn more
          </Link>
        </div>
      </section>

      <section className="mt-16 grid gap-6 sm:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-lg border border-slate-200 dark:border-slate-700 p-5"
          >
            <h2 className="font-semibold text-slate-800 dark:text-slate-100">
              {feature.title}
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              {feature.body}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
