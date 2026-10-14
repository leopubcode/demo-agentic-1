import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { About } from "../../pages/About";
import { I18nProvider } from "../I18nProvider";
import { LanguagePicker } from "../LanguagePicker";
import { createLanguageStore } from "../languageStore";
import { LANGUAGES, translate, translations } from "../translations";

describe("translations", () => {
  it("has the same keys in every language", () => {
    const keys = Object.keys(translations.en).sort();
    for (const language of LANGUAGES) {
      expect(Object.keys(translations[language]).sort()).toEqual(keys);
    }
  });

  it("interpolates params", () => {
    expect(translate("en", "verify.resent", { email: "a@b.c" })).toContain(
      "a@b.c",
    );
  });
});

describe("rendering", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("falls back to English without a provider", () => {
    render(<About />);
    expect(screen.getByRole("heading", { name: "About" })).toBeInTheDocument();
  });

  it("switches the page language through the picker", () => {
    localStorage.setItem("language", "en");
    render(
      <I18nProvider store={createLanguageStore()}>
        <LanguagePicker />
        <About />
      </I18nProvider>,
    );

    fireEvent.change(screen.getByRole("combobox", { name: "Language" }), {
      target: { value: "es" },
    });

    expect(
      screen.getByRole("heading", { name: "Acerca de" }),
    ).toBeInTheDocument();
    expect(document.documentElement.lang).toBe("es");
  });
});
