//import { expect } from "@playwright/test"
//import { test } from "@lib/test.fixtures"
import { test, expect } from "@playwright/test";
test.describe("university_search_home", () => {
  const searchText = "bri"
  const targetName = "University of the West of England, Bristol"
  const targetPath = "/data/university/2"
  const expectedLinkText = [
    "policies",
    "financial partnerships",
    "research partnerships",
    "academic partnerships",
    "FOI requests",
    "actions",
  ]

  test(`University search on home page yields expected results.`, async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1600, height: 1200 })
    await page.goto("/")

    await page.fill("input.ded-input-search-university", searchText)

    const container = page.locator("div.ded-university-search-result-container")
    await expect(container).toBeVisible()

    await container?.locator("> button", { hasText: targetName }).click()
    await expect(page).toHaveURL(new RegExp(targetPath))

    await expect(page.locator("h2", { hasText: targetName })).toBeVisible()

    await expect(
      page.locator("a.ded-tab", { hasNotText: "overview" })
    ).toHaveText(expectedLinkText)
  })
})
