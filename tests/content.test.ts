import { describe, expect, it } from "vitest";
import { projects, getProject } from "../data/projects";
import { profile } from "../data/profile";
describe("Approved public content", () => {
  it("uses the confirmed display name", () => { expect(profile.name).toBe("Abdourahmane Thiam"); });
  it("contains exactly the three approved case studies", () => { expect(projects.map((project) => project.slug)).toEqual(["hikma", "content-factory", "msda"]); });
  it("keeps slugs unique and resolves unknown routes safely", () => { expect(new Set(projects.map((project) => project.slug)).size).toBe(projects.length); expect(getProject("made-up-project")).toBeUndefined(); });
  it("does not expose private repository links", () => { for (const project of projects) { expect(project.visibility).toBe("Private source"); expect(JSON.stringify(project)).not.toMatch(/github\.com\/lph2o\/(hikma|creator-content-factory|msda-lead-engine)/); } });
  it("exposes the confirmed contact channel", () => { expect(profile.email).toBe("abdou7hiam@gmail.com"); expect(profile.linkedin).toBeNull(); });
  it("includes explicit scope and limitations for each case study", () => { for (const project of projects) { expect(project.limitations.length).toBeGreaterThan(0); expect(project.currentState.length).toBeGreaterThan(80); expect(project.decisions.length).toBe(3); } });
  it("only links to the verified public product", () => { expect(projects.filter((project) => project.live).map((project) => project.live)).toEqual(["https://hikma.top"]); });
});
