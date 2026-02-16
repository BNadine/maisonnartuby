import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("landing page loads with title and rooms link", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator(".title")).toContainText("Nartuby");
    await expect(page.locator(".rooms-link")).toBeVisible();
  });

  test("navigate from landing to rooms overview", async ({ page }) => {
    await page.goto("/");
    await page.locator(".rooms-link").click();
    await page.waitForURL("/rooms");
    await expect(page.locator(".page-title")).toBeVisible();
    await expect(page.locator(".room-card")).toHaveCount(5);
  });

  test("rooms overview shows all 5 room cards with images", async ({ page }) => {
    await page.goto("/rooms");
    const cards = page.locator(".room-card");
    await expect(cards).toHaveCount(5);

    for (let i = 0; i < 5; i++) {
      await expect(cards.nth(i).locator(".room-image")).toBeVisible();
      await expect(cards.nth(i).locator(".room-name")).not.toBeEmpty();
    }
  });

  test("click room card navigates to detail page", async ({ page }) => {
    await page.goto("/rooms");
    const firstCard = page.locator(".room-card").first();
    const roomName = await firstCard.locator(".room-name").textContent();
    await firstCard.click();
    await page.waitForURL(/\/rooms\/.+/);
    await expect(page.locator(".room-title")).toContainText(roomName!.trim());
  });

  test("breadcrumb navigation on room detail page", async ({ page }) => {
    await page.goto("/rooms/champagne");
    const breadcrumb = page.locator(".breadcrumb");
    await expect(breadcrumb).toBeVisible();

    // Navigate back to rooms via breadcrumb (second link goes to /rooms)
    await breadcrumb.locator("a[href='/rooms']").click();
    await page.waitForURL("/rooms");
    await expect(page.locator(".page-title")).toBeVisible();
  });

  test("breadcrumb home link returns to landing", async ({ page }) => {
    await page.goto("/rooms");
    await page.locator(".breadcrumb a[href='/']").click();
    await page.waitForURL("/");
    await expect(page.locator(".title")).toContainText("Nartuby");
  });

  test("all room slugs are accessible", async ({ page }) => {
    const slugs = ["champagne", "nid", "creatif", "nartuby", "lavande"];
    for (const slug of slugs) {
      await page.goto(`/rooms/${slug}`);
      await expect(page.locator(".room-title")).toBeVisible();
    }
  });
});
