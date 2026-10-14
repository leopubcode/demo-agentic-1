import { LANGUAGES, type Language } from "./translations";

const STORAGE_KEY = "language";

export function isLanguage(value: unknown): value is Language {
  return LANGUAGES.includes(value as Language);
}

// es, es-MX, ... -> Spanish; anything else -> English.
export function detectLanguage(browserLanguage: string | undefined): Language {
  return browserLanguage?.toLowerCase().startsWith("es") ? "es" : "en";
}

function readStored(): Language | undefined {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return isLanguage(value) ? value : undefined;
  } catch {
    return undefined;
  }
}

function writeStored(language: Language) {
  try {
    localStorage.setItem(STORAGE_KEY, language);
  } catch {
    // Storage unavailable: the choice still applies for this session.
  }
}

function applyToDocument(language: Language) {
  document.documentElement.lang = language;
}

// An external store (for useSyncExternalStore): the explicit choice wins,
// otherwise the browser's language decides.
export function createLanguageStore() {
  let current: Language | undefined;
  const listeners = new Set<() => void>();

  const getSnapshot = (): Language => {
    current ??= readStored() ?? detectLanguage(navigator.language);
    return current;
  };

  return {
    getSnapshot,
    subscribe(listener: () => void) {
      listeners.add(listener);
      applyToDocument(getSnapshot());
      return () => {
        listeners.delete(listener);
      };
    },
    setLanguage(language: Language) {
      current = language;
      writeStored(language);
      applyToDocument(language);
      listeners.forEach((listener) => listener());
    },
  };
}

export type LanguageStore = ReturnType<typeof createLanguageStore>;
