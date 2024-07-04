import { test, expect } from "@playwright/test";
const searchText = "bri";
const targetName = "University of the West of England, Bristol";
const targetPath = "/data/university/20";
const expectedLinkText = [
	"overview",
	"policies",
	"financial partnerships",
	"research partnerships",
	"academic partnerships",
	"FOI requests",
	"actions",
];

test.describe("university_search_home", () => {
	test.use({ viewport: { width: 1600, height: 1200 } });
	test("University search on home page yields expected results.", async ({
		page,
	}) => {
		await page.goto("/");

		page.locator("input.ded-input-search-university").fill(searchText);
		const container = page.locator(
			"div.ded-university-search-result-container"
		);
		await page.getByRole("button", { name: targetName }).click();
		await expect(page).toHaveURL(targetPath);
		await expect(
			page.locator(`.ded-university-search-result-container :text(targetName)`)
		).toBeTruthy;
		await expect(page.locator("a.ded-tab h2")).toHaveText(expectedLinkText);
	});
});
