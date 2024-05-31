import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
	test("Home page loads without errors; total investment is greater than 1bn.", async ({
		page,
	}) => {
		await page.goto("/");
		await expect(
			page.getByText("The Demilitarise Education Model")
		).toBeVisible();
		const element = page.locator(".ded-total-investment");
		expect(element).toContainText("£");
		const digits = element.innerText();
		const valueString = (await digits).replace(/[^\d.]/g, "");
		const valueFloat = Number.parseFloat(valueString);
		expect(valueFloat > 1000000000).toBeTruthy(); // 1bn
	});
});
