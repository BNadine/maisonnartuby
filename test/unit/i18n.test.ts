// @vitest-environment node
import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

function loadJson(filename: string): Record<string, unknown> {
  const path = resolve(__dirname, "../../i18n/translations", filename);
  return JSON.parse(readFileSync(path, "utf-8"));
}

function flattenKeys(obj: Record<string, unknown>, prefix = ""): string[] {
  return Object.entries(obj).flatMap(([key, value]) => {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === "object" && value !== null) {
      return flattenKeys(value as Record<string, unknown>, fullKey);
    }
    return [fullKey];
  });
}

describe("i18n translations", () => {
  const fr = loadJson("fr.json");
  const en = loadJson("en.json");
  const de = loadJson("de.json");

  const frKeys = flattenKeys(fr).sort();
  const enKeys = flattenKeys(en).sort();
  const deKeys = flattenKeys(de).sort();

  it("all languages have the same keys", () => {
    expect(enKeys).toEqual(frKeys);
    expect(deKeys).toEqual(frKeys);
  });

  it("no translation value is empty", () => {
    for (const [lang, translations] of [["fr", fr], ["en", en], ["de", de]]) {
      const keys = flattenKeys(translations as Record<string, unknown>);
      for (const key of keys) {
        const value = key.split(".").reduce((obj: unknown, k) => (obj as Record<string, unknown>)[k], translations);
        expect(value, `${lang}.${key} should not be empty`).toBeTruthy();
      }
    }
  });

  it("has translations for all room slugs", () => {
    const roomSlugs = ["champagne", "nid", "creatif", "nartuby", "lavande"];
    for (const slug of roomSlugs) {
      expect(frKeys).toContain(`rooms.${slug}.name`);
      expect(frKeys).toContain(`rooms.${slug}.description`);
    }
  });
});
