import { describe, expect, it } from "vitest";
import { configuredSiteUrl } from "../lib/seo";
describe("Production origin", () => {
  it("does not invent an origin for previews", () => { expect(configuredSiteUrl("")).toBeUndefined(); expect(configuredSiteUrl("not-a-url")).toBeUndefined(); });
  it("rejects credentials and non-web protocols", () => { expect(configuredSiteUrl("javascript:alert(1)")).toBeUndefined(); expect(configuredSiteUrl("https://user:secret@example.com")).toBeUndefined(); });
  it("normalizes an approved web origin", () => { expect(configuredSiteUrl("https://example.com/path")?.href).toBe("https://example.com/"); });
});
