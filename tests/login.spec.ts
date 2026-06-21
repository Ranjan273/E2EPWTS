import { test , expect } from '@playwright/test';
import loginModuleData from '../data/ui-data/login-module-data.json'

test.describe('Invalid/Valid login test',{
    tag : '@loginTest',
    annotation : {
        type : 'User Story link',
        description : 'Link of all user stories'
    }
},()=>{

test('[Login] Login User with correct email and password',async({page})=>{
    
    await page.goto('');

    await expect(page).toHaveURL(loginModuleData.url);
    const loginLink = page.locator('a[href="/login"]');
    await loginLink.click();

    const loginYourAccText = page.locator('div[class="login-form"] h2');
    await expect(loginYourAccText).toHaveText(loginModuleData.loginYourAcc_Text);

    const emailAddressTextBox = await page.locator("input[data-qa='login-email']");
    const passwordTextBox = await page.locator('input[name="password"]');
    const loginBtn = await page.getByRole('button', { name: 'Login' });

    await emailAddressTextBox.fill(loginModuleData.email_address);
    await passwordTextBox.fill(loginModuleData.PassWord);
    await loginBtn.click();

    const validateLoggedinASUsername =page.locator(`//a[contains(normalize-space(), 'Logged in as')]`);
    await expect(validateLoggedinASUsername).toContainText(loginModuleData.validateLoggedIn_Text);

    const logoutLink = await page.getByRole('link', { name: 'Logout' });
    const deleteAccountLink = await page.getByRole('link', { name: 'Delete Account' });

    await expect(logoutLink).toBeVisible();
    await expect(deleteAccountLink).toBeVisible();

    await logoutLink.click();

    await expect(loginLink).toBeVisible();

    await page.close();

});

test('[Login] Login User with incorrect email and password',async ({page})=>{

    await page.goto('');

    await expect(page).toHaveURL(loginModuleData.url);
    const loginLink = page.locator('a[href="/login"]');
    await loginLink.click();

    const loginYourAccText = page.locator('div[class="login-form"] h2');
    await expect(loginYourAccText).toHaveText(loginModuleData.loginYourAcc_Text);

    const emailAddressTextBox = await page.locator("input[data-qa='login-email']");
    const passwordTextBox = await page.locator('input[name="password"]');
    const loginBtn = await page.getByRole('button', { name: 'Login' });

    await emailAddressTextBox.fill(loginModuleData.invalid_Email_Address);
    await passwordTextBox.fill(loginModuleData.PassWord);
    await loginBtn.click();

    const invalidCredInlineError = await page.locator("//p[normalize-space()='Your email or password is incorrect!']");
    await expect(invalidCredInlineError).toHaveText(loginModuleData.Invalid_cred_Inline_Error_text);

    await page.close();
    
});
})