import { test , expect } from "@playwright/test"

test("[Registration] Click on register and redirect to redirect to registration page", async({page})=>{

    const url = "https://automationexercise.com/";
    await page.goto(url);

    await expect(page).toHaveURL(url);
    const loginLink = page.locator('a[href="/login"]');
    await loginLink.click();

    const loginYourAccText = page.locator('div[class="login-form"] h2');
    const signupNewUserText = page.locator('div[class="signup-form"] h2');

    await expect(loginYourAccText).toHaveText('Login to your account');
    await expect(signupNewUserText).toHaveText('New User Signup!'); 

    const userNameText = page.locator('input[placeholder="Name"]');
    const emailText = page.locator('input[data-qa="signup-email"]');
    const signUpBtn = page.locator('button[data-qa="signup-button"]');

    await userNameText.fill("ranjan323");
    await emailText.fill('ranjan323@gmail.com');
    await signUpBtn.click();

    const enterAccountInfo = page.locator('//b[normalize-space()="Enter Account Information"]');
    await expect(enterAccountInfo).toHaveText("Enter Account Information");

    const titleRadio = await page.getByRole('radio', { name: 'Mr.' });
    const nameText = await page.getByRole('textbox', { name: 'Name *', exact: true })
    const emailTextBox = await page.getByRole('textbox', { name: 'Email *', exact: true  });
    const passWord = await page.getByRole('textbox', { name: 'Password *' });
    const dayDropDownDOB = await page.locator('select[name="days"]');
    const monthDropDownDOB = await page.locator('select[name="months"]');
    const yearDropDownDOB = await page.locator('select[name="years"]');

    await titleRadio.check();
    const enteredUNText = await nameText.inputValue();
    await expect(enteredUNText).toContain('ranjan323');
    const enteredEmailText = await emailTextBox.inputValue();
    await expect(enteredEmailText).toContain('ranjan323@gmail.com');
    await passWord.fill('Pass@1234');
    await dayDropDownDOB.selectOption('12');
    await monthDropDownDOB.selectOption('April');
    await yearDropDownDOB.selectOption('1996');

    const addressInfoText = await page.locator('b:has-text("ADDRESS INFORMATION")');
    await expect(addressInfoText).toHaveText('Address Information');

    const firstNameTextBox = await page.getByRole('textbox', { name: 'First name *' });
    const lastNameTextBox  = await page.getByRole('textbox', { name: 'Last name *' });
    const companyTextBox = await page.locator('#company');
    const addressLabel = await page.getByText('(Street address, P.O. Box, Company name, etc.)', { exact: true });
    const address1TextBox = await page.locator('#address1');
    const address2TextBox = await page.locator('#address2');
    const countryDropDown = await page.locator('#country');
    const stateTextbox = await page.locator('#state');
    const cityTextbox = await page.locator('#city');
    const zipcodeTextbox = await page.locator("#zipcode");
    const mobileNumberTextbox = await page.locator("#mobile_number");
    const createAccountBtn = await page.locator("button[data-qa='create-account']");

    await firstNameTextBox.fill('Ranjan');
    await lastNameTextBox.fill('Pradhan');
    await companyTextBox.fill('newCompany');
    await expect(addressLabel).toHaveText('(Street address, P.O. Box, Company name, etc.)');

    await address1TextBox.fill('begumpet ,hyderabad');
    await address2TextBox.fill('new Colony');
    await countryDropDown.selectOption('India');
    await stateTextbox.fill('Telengana');
    await cityTextbox.fill('Hyderabad');
    await zipcodeTextbox.fill('500001');
    await mobileNumberTextbox.fill('9807654321');
    await createAccountBtn.click();

    const accountCreatedvalidationText = await page.locator("h2[class='title text-center'] b");
    await expect(accountCreatedvalidationText).toHaveText('Account Created!');
    const congratsValidationText = await page.getByText('Congratulations! Your new account has been successfully created!');
    await expect(congratsValidationText).toHaveText('Congratulations! Your new account has been successfully created!');
    const advantageValidationText = await page.getByText('You can now take advantage of member privileges to enhance your online shopping experience with us.', { exact: true });
    await expect(advantageValidationText).toHaveText('You can now take advantage of member privileges to enhance your online shopping experience with us.');

    const continueBtn = await page.getByRole('link', { name: 'Continue' });
    await continueBtn.click();

    const validateLoggedinASUsername =page.locator(`//a[contains(normalize-space(), 'Logged in as')]`);
    await expect(validateLoggedinASUsername).toContainText(' Logged in as ');

    const deleteAccountLink = await page.getByRole('link', { name: 'Delete Account' });
    await deleteAccountLink.click();

    const accountDeletedValidationText = await page.locator("h2[class='title text-center'] b");
    await expect(accountDeletedValidationText).toHaveText('Account Deleted!');

    const continueBtnAfrDlt = await page.getByRole('link', { name: 'Continue' });
    await continueBtnAfrDlt.click();

    await expect(loginLink).toBeVisible();

    await page.close();







})