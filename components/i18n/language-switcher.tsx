"use client";

import { useLocale, type Locale } from "./locale-context";
const locales: Locale[] = ["en", "fr", "it"];
export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  return <div className="language-switcher" aria-label="Choose language">
    {locales.map((item) => <button key={item} type="button" className={item === locale ? "is-active" : ""} aria-pressed={item === locale} onClick={() => setLocale(item)}>{item.toUpperCase()}</button>)}
  </div>;
}
