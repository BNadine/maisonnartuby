import { test, expect, type Page } from "@playwright/test";

async function switchLanguage(page: Page, label: string) {
  await page.locator(".language-switcher button[role='combobox']").click();
  await page.locator(`[role='option']:has-text("${label}")`).click();
}

test.describe("Language Switching", () => {
  test("page loads in French by default", async ({ page }) => {
    await page.goto("/rooms");
    await expect(page.locator(".page-title")).toContainText("Nos Chambres");
  });

  test("switches to English", async ({ page }) => {
    await page.goto("/rooms");
    await expect(page.locator(".page-title")).toContainText("Nos Chambres");

    await switchLanguage(page, "English");
    await expect(page.locator(".page-title")).toContainText("Our Rooms");
  });

  test("switches to German", async ({ page }) => {
    await page.goto("/rooms");
    await expect(page.locator(".page-title")).toContainText("Nos Chambres");

    await switchLanguage(page, "Deutsch");
    await expect(page.locator(".page-title")).toContainText("Unsere Zimmer");
  });

  test("language persists across navigation", async ({ page }) => {
    await page.goto("/rooms");
    await switchLanguage(page, "English");
    await expect(page.locator(".page-title")).toContainText("Our Rooms");

    await page.locator(".room-card").first().click();
    await page.waitForURL(/\/rooms\/.+/);
    await expect(page.locator(".booking-button")).toContainText("Book on Airbnb");
  });

  test("room detail page translates correctly", async ({ page }) => {
    await page.goto("/rooms/lavande");
    await expect(page.locator(".room-title")).toContainText("Lavande");

    await switchLanguage(page, "English");
    await expect(page.locator(".room-title")).toContainText("Lavender");

    await switchLanguage(page, "Deutsch");
    await expect(page.locator(".room-title")).toContainText("Lavendel");
  });
});
