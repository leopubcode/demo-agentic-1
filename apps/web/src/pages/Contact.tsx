export function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
        Contact
      </h1>
      <p className="mt-4 text-slate-600 dark:text-slate-400">
        Email us at{" "}
        <a
          href="mailto:hello@example.com"
          className="font-medium underline hover:text-slate-900 dark:hover:text-slate-100"
        >
          hello@example.com
        </a>
      </p>
    </div>
  );
}
