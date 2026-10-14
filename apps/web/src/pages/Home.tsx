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
    body: "Tell us where you bought the window and we will take care of the rest.",
  },
];

const bevelButton =
  "border-4 border-t-white border-l-white border-b-gray-600 border-r-gray-600 bg-gray-300 px-5 py-2 font-bold text-black underline hover:bg-yellow-200";

export function Home() {
  return (
    <div
      className="min-h-screen bg-fuchsia-700 px-4 py-10 text-black"
      style={{ fontFamily: '"Comic Sans MS", "Comic Sans", cursive' }}
    >
      <div className="mx-auto max-w-3xl border-8 border-double border-yellow-300 bg-lime-200 p-6">
        <section className="text-center">
          <h1 className="text-6xl font-bold text-fuchsia-700 [text-shadow:3px_3px_0_#fde047]">
            Leafy
          </h1>
          <p className="mt-2 text-xl font-bold text-blue-800">
            ~*~ Keep your houseplants happy, without the guesswork! ~*~
          </p>
          <p className="mt-4 bg-black px-2 py-1 font-mono text-sm text-lime-400">
            *** UNDER CONSTRUCTION ***
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link to="/signup" className={bevelButton}>
              Get started
            </Link>
            <Link to="/about" className={bevelButton}>
              Learn more
            </Link>
          </div>
        </section>

        <hr className="my-8 border-t-4 border-dashed border-fuchsia-700" />

        <section className="grid gap-4 sm:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="border-4 border-t-white border-l-white border-b-gray-600 border-r-gray-600 bg-yellow-100 p-4"
            >
              <h2 className="font-bold text-red-600 underline">
                {feature.title}
              </h2>
              <p className="mt-2 text-sm">{feature.body}</p>
            </div>
          ))}
        </section>

        <p className="mt-8 text-center text-sm">
          You are visitor number{" "}
          <span className="bg-black px-1 font-mono text-lime-400">001337</span>
        </p>
      </div>
    </div>
  );
}
