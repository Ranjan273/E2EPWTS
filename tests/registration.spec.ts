import { test , expect } from "@playwright/test"

test("Click on register and redirect to redirect to registration page", async({page})=>{

    await page.goto("https://bookcart.azurewebsites.net/login");
    const newUserText = page.locator('span:has-text("New User?")');
    await expect(newUserText).toHaveText("New User? ");
    
    const registerBtn = page.locator('span:has-text("Register")');
    await registerBtn.click();
    const userRegistration = await page.getByText('User Registration');
    await expect(userRegistration).toHaveText(" User Registration ");

    const firstNameTextBox = await page.getByText('First name');
    const lastNameTextBox = await page.getByText('Last name');
    const userNameTextBox = await page.getByText('User name');
    const passwoordTextBox = await page.getByText('Password', { exact: true });
    const eyeIconPassword = await page.locator('mat-icon').filter({ hasText: 'visibility_off' }).first();
    const confirmPasswordTextBox = await page.getByText('Confirm Password', { exact: true });
    const eyeIconConfirmPassword = await page.locator('mat-icon').filter({ hasText: 'visibility_off' }).first();
    const genderMaleRdBtn = page.locator('input[type="radio"][value="Male"]');
    const registerBtnFinal = await page.locator("//span[normalize-space()='Register']");

    await firstNameTextBox.fill('Ranjan');
    await lastNameTextBox.fill('Pradhan');
    await userNameTextBox.fill('ranjan123');
    await passwoordTextBox.fill('Pass@1234');
    await eyeIconPassword.click();
    await confirmPasswordTextBox.fill('Pass@1234')
    await eyeIconConfirmPassword.click();
    await genderMaleRdBtn.check();
    await registerBtnFinal.click();

    await expect(page).toHaveURL('https://bookcart.azurewebsites.net/login');

    const userNameLoginTextBox = await page.getByRole('textbox', { name: 'Username' });
    const passwordLoginTextBox = await page.getByRole('textbox', { name: 'Password' });
    const loginBtn = await page.locator('span').filter({ hasText: 'Login' }).first();
    const eyeIconLogin = await page.getByText('visibility_off', { exact: true });

    await userNameLoginTextBox.fill('ranjan123');
    await passwordLoginTextBox.fill('Pass@1234');
    await eyeIconLogin.click();
    await loginBtn.click();

    await expect(page).toHaveURL('https://bookcart.azurewebsites.net/');



})