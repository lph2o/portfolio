"use client";

import { useEffect } from "react";
import { getProject } from "@/data/projects";
import { usePathname } from "next/navigation";
import { useDictionary } from "./use-dictionary";

export function MetadataSync() {
  const pathname = usePathname();
  const { dictionary, project } = useDictionary();
  useEffect(() => {
    const slug = pathname.match(/^\/projects\/(hikma|content-factory|msda)$/)?.[1] as "hikma" | "content-factory" | "msda" | undefined;
    const title = slug ? `${getProject(slug)?.title ?? slug} — Abdourahmane Thiam` : pathname === "/about" ? `À propos — Abdourahmane Thiam` : pathname === "/contact" ? `Contact — Abdourahmane Thiam` : pathname === "/projects" ? `Projets — Abdourahmane Thiam` : dictionary.metadata.siteTitle;
    const description = slug ? project(slug).description : pathname === "/about" ? dictionary.metadata.about : pathname === "/contact" ? dictionary.metadata.contact : pathname === "/projects" ? dictionary.metadata.projects : dictionary.metadata.home;
    document.title = title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement("meta"); meta.setAttribute("name", "description"); document.head.appendChild(meta); }
    meta.setAttribute("content", description);
  }, [dictionary, pathname, project]);
  return null;
}
