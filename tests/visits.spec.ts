import { test, expect } from "@playwright/test";
//import { test } from "@lib/test.fixtures";
import paths from "../params/page-elements.ts";
import unis from "../params/universities.ts";
test.describe("Check for expected elements", () => {
	paths.forEach(({ uri, h3, img }) => {
		// You can also do it with test.describe() or with multiple tests as long the test name is unique.
		test(`${uri}`, async ({ page }) => {
	
			await page.goto(uri);
			if (uri !== "/who-we-are/team"){
				await expect(page.locator(".ded-hub-item h3")).toHaveText(h3);
			}
			else{
				await expect(page.getByRole('heading', { name: h3 }).first()).toBeVisible();
				const img_result = img ? await expect(page.locator(img)).toBeTruthy(): false;
			}
			
		});
	});
});



test.describe("visit_university", () => {
	Object.entries(unis).forEach(([universityId, universitySlug]) => {
		if (universitySlug === null) {
			universitySlug = universityId;
		}
		test(`testing ${universityId}`, async ({ page }) => {
			await page.goto(`/data/university/${universitySlug}`);
			const element = page.locator(".ded-breadcrumbs");
			expect(element).toBeTruthy();
		});
	});
});
