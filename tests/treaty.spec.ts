import { test, expect } from "@playwright/test";

test.describe("treaty", () => {
	test.use({ viewport: { width: 1600, height: 1200 } });
	test("Can navigate to treaty page.", async ({ page }) => {
		await page.goto("/");
		await page.getByRole("button", { name: "how we do it" }).click();
		await expect(page).toHaveURL("/how-we-do-it");

		await page.getByRole("link", { name: "treaty" }).click();
		await expect(page).toHaveURL("/how-we-do-it/treaty");
		await expect(
			page.getByText("The Demilitarise Education Treaty", { exact: true })
		).toBeVisible();
	});
});
