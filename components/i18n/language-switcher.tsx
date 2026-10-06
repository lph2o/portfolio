"use client";
import { useLocale, type Locale } from "./locale-context";
const locales: Locale[] = ["fr", "en"];
export function LanguageSwitcher() { const { locale, setLocale } = useLocale(); return <div className="language-switcher" aria-label="Choisir la langue">{locales.map((item) => <button key={item} type="button" className={item === locale ? "is-active" : ""} aria-pressed={item === locale} onClick={() => setLocale(item)}>{item.toUpperCase()}</button>)}</div>; }
