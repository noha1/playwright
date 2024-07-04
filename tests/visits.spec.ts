import { test, expect } from "@playwright/test";
import { exit } from "process";
let paths: Array<{
	uri: string;
	tit: Array<string>;
	order?: number;
}> = [
	{
		uri: "who-we-are",
		tit: ["team", "council", "our partners", "FAQ"],
	},
	{
		uri: "take-action",
		tit: [
			"Contribute to Database",
			"Start building an impact",
			"discord",
			"spread the word",
		],
	},
	{
		uri: "what-we-do",
		tit: [
			"our why",
			"our impact",
			"vision, mission & values",
			"strategy & story",
		],
	},
];
console.log("DATA_TEST:  " + process.env.DATA_TEST);
test.describe("visit main menu tabs", () => {
	test("visit parameterised uris from cli and check if their h3 titles.", async ({
		page,
	}) => {
		const DATA_TEST = process.env.DATA_TEST;
		let selPath = paths.filter((path) => path.uri === DATA_TEST);
		if (DATA_TEST) {
			console.log(DATA_TEST);
			await page.goto("/" + DATA_TEST);
			await expect(page.locator("h3")).toHaveText(selPath[0]["tit"]);
		} else {
			console.log("uri was not found in fixture");
			for (const p of paths) {
				await page.goto("/" + p.uri);
				console.log(p.uri);
				await expect(page.locator("h3")).toHaveText(p.tit); // to do parmeterise also h3 or h2 later if needed
			}
		}
	});
});
