import { test , expect } from '@playwright/test';


test('[Login] Login User with correct email and password',async({page})=>{
    
    const url = "https://automationexercise.com/";
    await page.goto(url);

    await expect(page).toHaveURL(url);
    const loginLink = page.locator('a[href="/login"]');
    await loginLink.click();

    const loginYourAccText = page.locator('div[class="login-form"] h2');
    await expect(loginYourAccText).toHaveText('Login to your account');

    const emailAddressTextBox = await page.locator("input[data-qa='login-email']");
    const passwordTextBox = await page.locator('input[name="password"]');
    const loginBtn = await page.getByRole('button', { name: 'Login' });

    await emailAddressTextBox.fill('ranjan1@gmail.com');
    await passwordTextBox.fill('Pass@1234');
    await loginBtn.click();

    const validateLoggedinASUsername =page.locator(`//a[contains(normalize-space(), 'Logged in as')]`);
    await expect(validateLoggedinASUsername).toContainText(' Logged in as ');

    const logoutLink = await page.getByRole('link', { name: 'Logout' });
    const deleteAccountLink = await page.getByRole('link', { name: 'Delete Account' });

    await expect(logoutLink).toBeVisible();
    await expect(deleteAccountLink).toBeVisible();

    await logoutLink.click();

    await expect(loginLink).toBeVisible();

    await page.close();

});

test('[Login] Login User with incorrect email and password',async ({page})=>{

    const url = "https://automationexercise.com/";
    await page.goto(url);

    await expect(page).toHaveURL(url);
    const loginLink = page.locator('a[href="/login"]');
    await loginLink.click();

    const loginYourAccText = page.locator('div[class="login-form"] h2');
    await expect(loginYourAccText).toHaveText('Login to your account');

    const emailAddressTextBox = await page.locator("input[data-qa='login-email']");
    const passwordTextBox = await page.locator('input[name="password"]');
    const loginBtn = await page.getByRole('button', { name: 'Login' });

    await emailAddressTextBox.fill('ranjan19876543234567@gmail.com');
    await passwordTextBox.fill('Pass@1234');
    await loginBtn.click();

    const invalidCredInlineError = await page.locator("//p[normalize-space()='Your email or password is incorrect!']");
    await expect(invalidCredInlineError).toHaveText('Your email or password is incorrect!');

    await page.close();
    
});