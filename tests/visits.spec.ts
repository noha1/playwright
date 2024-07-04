import { test, expect } from "@playwright/test";
import paths from "../fixtures/menu_uri";

test.describe("visit main menu tabs", () => {
	test("Visit parameterised uris from cli and check if their h3 titles exist.", async ({
		page,
	}) => {
		const DATA_TEST = process.env.DATA_TEST;
		let selPath = paths.filter((path) => path.uri === DATA_TEST);
		//one cli argument is passed
		if (DATA_TEST) {
			await page.goto("/" + DATA_TEST);
			await expect(page.locator("h3")).toHaveText(selPath[0]["tit"]);
		} else {
			console.log("uri was not found in fixture");
			for (const p of paths) {
				await page.goto("/" + p.uri);
				await expect(page.locator("h3")).toHaveText(p.tit); // to do parmeterise also h3 or h2 later if needed
			}
		}
	});
});
