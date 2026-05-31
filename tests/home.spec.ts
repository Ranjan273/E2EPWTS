import { test, expect } from '@playwright/test'

test("launch the application and click on login button", async ({ page }) => {
    const url = "https://automationexercise.com/";
    await page.goto(url);
    await expect(page).toHaveURL(url);
    const pageLogo = await page.locator("img[alt='Website for automation practice']");
    await expect(pageLogo).toBeVisible();
    const loginLink = await page.locator('a[href="/login"]');
    await expect(loginLink).toHaveText(" Signup / Login");
    await page.close();
});


    