import { test, expect } from '@playwright/test';
import loginModuleData from '../data/ui-data/login-module-data.json';

test("[Launch] launch the application and click on login button", async ({ page }) => {
    
    await page.goto('');
    await expect(page).toHaveURL(loginModuleData.url);
    const pageLogo = await page.locator("img[alt='Website for automation practice']");
    await expect(pageLogo).toBeVisible();
    const loginLink = await page.locator('a[href="/login"]');
    await expect(loginLink).toHaveText(" Signup / Login");
    await page.close();
});


    