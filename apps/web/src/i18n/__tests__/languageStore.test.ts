import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { createLanguageStore, detectLanguage } from "../languageStore";

describe("detectLanguage", () => {
  it("maps Spanish locales to es", () => {
    expect(detectLanguage("es")).toBe("es");
    expect(detectLanguage("es-MX")).toBe("es");
    expect(detectLanguage("ES-ar")).toBe("es");
  });

  it("maps French locales to fr", () => {
    expect(detectLanguage("fr")).toBe("fr");
    expect(detectLanguage("fr-CA")).toBe("fr");
    expect(detectLanguage("FR-be")).toBe("fr");
  });

  it("falls back to English", () => {
    expect(detectLanguage("en-US")).toBe("en");
    expect(detectLanguage("de-DE")).toBe("en");
    expect(detectLanguage("esperanto")).toBe("en");
    expect(detectLanguage(undefined)).toBe("en");
  });
});

describe("createLanguageStore", () => {
  beforeEach(() => {
    localStorage.clear();
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("defaults to the browser language", () => {
    vi.spyOn(navigator, "language", "get").mockReturnValue("es-ES");
    expect(createLanguageStore().getSnapshot()).toBe("es");
  });

  it("lets a stored choice override the browser language", () => {
    vi.spyOn(navigator, "language", "get").mockReturnValue("es-ES");
    localStorage.setItem("language", "en");
    expect(createLanguageStore().getSnapshot()).toBe("en");
  });

  it("ignores an invalid stored value", () => {
    vi.spyOn(navigator, "language", "get").mockReturnValue("en-US");
    localStorage.setItem("language", "klingon");
    expect(createLanguageStore().getSnapshot()).toBe("en");
  });

  it("persists an explicit choice, updates <html lang> and notifies", () => {
    vi.spyOn(navigator, "language", "get").mockReturnValue("en-US");
    const store = createLanguageStore();
    const listener = vi.fn();
    store.subscribe(listener);

    store.setLanguage("es");

    expect(store.getSnapshot()).toBe("es");
    expect(localStorage.getItem("language")).toBe("es");
    expect(document.documentElement.lang).toBe("es");
    expect(listener).toHaveBeenCalledOnce();
  });

  it("survives unavailable storage", () => {
    vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
      throw new Error("blocked");
    });
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("blocked");
    });
    vi.spyOn(navigator, "language", "get").mockReturnValue("es");
    const store = createLanguageStore();
    expect(store.getSnapshot()).toBe("es");
    store.setLanguage("en");
    expect(store.getSnapshot()).toBe("en");
  });
});
