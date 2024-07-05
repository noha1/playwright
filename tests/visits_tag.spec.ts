import { test, expect } from "@playwright/test";

test.describe("visit pages by tag to check the headings", () => {
	test(
		"Home page loads without errors",
		{
			tag: "@visit_home",
		},
		async ({ page }) => {
			await page.goto("/");
			await expect(
				page.getByText("The Demilitarise Education Model")
			).toBeVisible();
		}
	);

	test(
		"test takaction Page has expected heading",
		{
			tag: "@visit_takeaction",
		},
		async ({ page }) => {
			await page.goto("/take-action");
			await expect(
				page.locator("h3", { hasText: "Contribute to Database" })
			).toBeVisible();
			await expect(
				page.locator("h3", { hasText: "Start building an impact" })
			).toBeVisible();
			await expect(page.locator("h3", { hasText: "discord" })).toBeVisible();
			await expect(
				page.locator("h3", { hasText: "spread the word" })
			).toBeVisible();
		}
	);

	test(
		"test whoweare Page has expected heading",
		{
			tag: "@visit_whoweare",
		},
		async ({ page }) => {
			await page.goto("/who-we-are");
			await expect(page.locator("h3", { hasText: "team" })).toBeVisible();
			await expect(
				page.locator("h3", { hasText: "our partners" })
			).toBeVisible();
			await expect(page.locator("h3", { hasText: "council" })).toBeVisible();
			await expect(page.locator("h3", { hasText: "FAQ" })).toBeVisible();
		}
	);

	test(
		"test what we do Page has expected heading",
		{
			tag: "@visit_whatwedo",
		},
		async ({ page }) => {
			await page.goto("/what-we-do");
			await expect(page.locator("h3", { hasText: "our why" })).toBeVisible();
			await expect(page.locator("h3", { hasText: "our impact" })).toBeVisible();
			await expect(
				page.locator("h3", { hasText: "vision, mission & values" })
			).toBeVisible();
			await expect(
				page.locator("h3", { hasText: "strategy & story" })
			).toBeVisible();
		}
	);

	test(
		"test how we do it Page has expected heading",
		{
			tag: "@visit_howwedoit",
		},
		async ({ page }) => {
			await page.goto("/how-we-do-it");
			await expect(page.locator("h3", { hasText: "database" })).toBeVisible();
			await expect(page.locator("h3", { hasText: "learn" })).toBeVisible();
			await expect(
				page.locator("h3", { hasText: "definitions" })
			).toBeVisible();
			await expect(page.locator("h3", { hasText: "treaty" })).toBeVisible();
		}
	);

	test(
		"test data Page has expected heading",
		{
			tag: "@visit_data",
		},
		async ({ page }) => {
			await page.goto("/data");
			await expect(
				page.locator("h3", { hasText: "Search Universities" })
			).toBeVisible();
			await expect(
				page.locator("h3", { hasText: "Latest Actions" })
			).toBeVisible();
			await expect(
				page.locator("h3", { hasText: "Latest FOI Requests" })
			).toBeVisible();
			await expect(
				page.locator("h3", { hasText: "Financial Partnerships" })
			).toBeVisible();
			await expect(
				page.locator("h3", { hasText: "Research Partnerships" })
			).toBeVisible();
			await expect(
				page.locator("h3", { hasText: "Academic Partnerships" })
			).toBeVisible();
		}
	);
});
