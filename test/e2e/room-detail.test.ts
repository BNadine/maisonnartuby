import { test, expect } from "@playwright/test";

test.describe("Room Detail Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/rooms/nartuby");
  });

  test("displays room info sections", async ({ page }) => {
    await expect(page.locator(".room-title")).toContainText("Nartuby");
    await expect(page.locator(".room-description")).not.toBeEmpty();
    await expect(page.locator(".detail-card")).toHaveCount(2);
    await expect(page.locator(".amenities-list li")).toHaveCount(4);
  });

  test("gallery thumbnails update main image", async ({ page }) => {
    const mainImage = page.locator(".gallery-main-image");
    const initialSrc = await mainImage.getAttribute("src");

    // Click second thumbnail and wait for the new image to appear
    await page.locator(".thumbnail").nth(1).click();
    await expect(mainImage).not.toHaveAttribute("src", initialSrc!);
  });

  test("lightbox opens on main image click", async ({ page }) => {
    await page.locator(".gallery-main").click();
    await expect(page.locator(".lightbox")).toBeVisible();
    await expect(page.locator(".lightbox-image")).toBeVisible();
    await expect(page.locator(".lightbox-counter")).toBeVisible();
  });

  test("lightbox navigation with buttons", async ({ page }) => {
    await page.locator(".gallery-main").click();
    const counter = page.locator(".lightbox-counter");
    await expect(counter).toContainText("1 /");

    await page.locator(".lightbox-next").click();
    await expect(counter).toContainText("2 /");

    await page.locator(".lightbox-prev").click();
    await expect(counter).toContainText("1 /");
  });

  test("lightbox closes with close button", async ({ page }) => {
    await page.locator(".gallery-main").click();
    await expect(page.locator(".lightbox")).toBeVisible();

    await page.locator(".lightbox-close").click();
    await expect(page.locator(".lightbox")).not.toBeVisible();
  });

  test("lightbox closes with Escape key", async ({ page }) => {
    await page.locator(".gallery-main").click();
    await expect(page.locator(".lightbox")).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(page.locator(".lightbox")).not.toBeVisible();
  });

  test("lightbox keyboard navigation", async ({ page }) => {
    await page.locator(".gallery-main").click();
    const counter = page.locator(".lightbox-counter");
    await expect(counter).toContainText("1 /");

    await page.keyboard.press("ArrowRight");
    await expect(counter).toContainText("2 /");

    await page.keyboard.press("ArrowLeft");
    await expect(counter).toContainText("1 /");
  });

  test("booking button links to Airbnb", async ({ page }) => {
    const bookingButton = page.locator(".booking-button");
    await expect(bookingButton).toBeVisible();
    await expect(bookingButton).toHaveAttribute("href", /airbnb\.de\/h\/maisonnartuby-/);
    await expect(bookingButton).toHaveAttribute("target", "_blank");
  });
});
