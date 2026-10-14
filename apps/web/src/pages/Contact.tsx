export function Contact() {
  return (
    <div className="min-h-screen bg-fuchsia-700 px-4 py-10">
      <div className="max-w-2xl mx-auto border-8 border-double border-yellow-300 bg-lime-200 px-4 py-12">
        <h1 className="text-3xl font-bold text-slate-900">Contact</h1>
        <p className="mt-4 text-slate-600">
          Email us at{" "}
          <a
            href="mailto:hello@example.com"
            className="font-medium underline hover:text-slate-900"
          >
            hello@example.com
          </a>
        </p>
      </div>
    </div>
  );
}
