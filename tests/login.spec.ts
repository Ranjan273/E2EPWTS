import { test, expect } from '@playwright/test'

test("launch the application and click on login button", async ({ page }) => {
    const url = "https://bookcart.azurewebsites.net/";
    await page.goto(url);
    await expect(page).toHaveURL(url);
    await page.locator("//span[normalize-space()='Login']").click();
    const loginText = await page.locator('mat-card-title:has-text("Login")');
    await expect(loginText).toHaveText("Login");
    await page.close();
});


    