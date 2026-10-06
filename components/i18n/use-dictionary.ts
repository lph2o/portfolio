"use client";

import { getDictionary, getProjectTranslation } from "@/data/translations";
import { useLocale } from "./locale-context";
export function useDictionary() { const { locale } = useLocale(); return { locale, dictionary: getDictionary(locale), project: (slug: "hikma" | "content-factory" | "msda") => getProjectTranslation(locale, slug) }; }
