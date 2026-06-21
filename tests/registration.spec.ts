import { test , expect } from "@playwright/test"
import registrationModuleData from '../data/ui-data/registration-module-data.json'
import loginModuleData from '../data/ui-data/login-module-data.json'

test("[Registration] Click on register and redirect to redirect to registration page", async({page})=>{

    await page.goto('');

    await expect(page).toHaveURL(loginModuleData.url);
    const loginLink = page.locator('a[href="/login"]');
    await loginLink.click();

    const loginYourAccText = page.locator('div[class="login-form"] h2');
    const signupNewUserText = page.locator('div[class="signup-form"] h2');

    await expect(loginYourAccText).toHaveText(registrationModuleData.login_YourAcc_Text);
    await expect(signupNewUserText).toHaveText(registrationModuleData.signup_NewUser_Text); 

    const userNameText = page.locator('input[placeholder="Name"]');
    const emailText = page.locator('input[data-qa="signup-email"]');
    const signUpBtn = page.locator('button[data-qa="signup-button"]');

    await userNameText.fill(registrationModuleData.userName_Textbox);
    await emailText.fill(registrationModuleData.email_Textbox);
    await signUpBtn.click();

    const enterAccountInfo = page.locator('//b[normalize-space()="Enter Account Information"]');
    await expect(enterAccountInfo).toHaveText(registrationModuleData.enter_Account_Info_Text);

    const titleRadio = await page.getByRole('radio', { name: 'Mr.' });
    const nameText = await page.getByRole('textbox', { name: 'Name *', exact: true })
    const emailTextBox = await page.getByRole('textbox', { name: 'Email *', exact: true  });
    const passWord = await page.getByRole('textbox', { name: 'Password *' });
    const dayDropDownDOB = await page.locator('select[name="days"]');
    const monthDropDownDOB = await page.locator('select[name="months"]');
    const yearDropDownDOB = await page.locator('select[name="years"]');

    await titleRadio.check();
    const enteredUNText = await nameText.inputValue();
    await expect(enteredUNText).toContain(registrationModuleData.userName_Textbox);
    const enteredEmailText = await emailTextBox.inputValue();
    await expect(enteredEmailText).toContain(registrationModuleData.email_Textbox);
    await passWord.fill(registrationModuleData.Password_TextBox);
    await dayDropDownDOB.selectOption(registrationModuleData.day_DropDown_DOB);
    await monthDropDownDOB.selectOption(registrationModuleData.month_DropDown_DOB);
    await yearDropDownDOB.selectOption(registrationModuleData.year_DropDown_DOB);

    const addressInfoText = await page.locator('b:has-text("ADDRESS INFORMATION")');
    await expect(addressInfoText).toHaveText(registrationModuleData.addressInfoText);

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

    await firstNameTextBox.fill(registrationModuleData.first_Name_TextBox);
    await lastNameTextBox.fill(registrationModuleData.last_Name_TextBox);
    await companyTextBox.fill(registrationModuleData.company_Text_Box);
    await expect(addressLabel).toHaveText(registrationModuleData.address_Label);

    await address1TextBox.fill(registrationModuleData.address1_TextBox);
    await address2TextBox.fill(registrationModuleData.address2_TextBox);
    await countryDropDown.selectOption(registrationModuleData.country_DropDown);
    await stateTextbox.fill(registrationModuleData.state_Textbox);
    await cityTextbox.fill(registrationModuleData.city_Textbox);
    await zipcodeTextbox.fill(registrationModuleData.zipcode_Textbox);
    await mobileNumberTextbox.fill(registrationModuleData.mobile_Number_Textbox);
    await createAccountBtn.click();

    const accountCreatedvalidationText = await page.locator("h2[class='title text-center'] b");
    await expect(accountCreatedvalidationText).toHaveText(registrationModuleData.account_Created_validation_Text);
    const congratsValidationText = await page.getByText('Congratulations! Your new account has been successfully created!');
    await expect(congratsValidationText).toHaveText(registrationModuleData.congrats_Validation_Text);
    const advantageValidationText = await page.getByText('You can now take advantage of member privileges to enhance your online shopping experience with us.', { exact: true });
    await expect(advantageValidationText).toHaveText(registrationModuleData.advantage_Validation_Text);

    const continueBtn = await page.getByRole('link', { name: 'Continue' });
    await continueBtn.click();

    const validateLoggedinASUsername =page.locator(`//a[contains(normalize-space(), 'Logged in as')]`);
    await expect(validateLoggedinASUsername).toContainText(registrationModuleData.validate_Loggedin_AS_Username);

    const deleteAccountLink = await page.getByRole('link', { name: 'Delete Account' });
    await deleteAccountLink.click();

    const accountDeletedValidationText = await page.locator("h2[class='title text-center'] b");
    await expect(accountDeletedValidationText).toHaveText(registrationModuleData.account_Deleted_Validation_Text);

    const continueBtnAfrDlt = await page.getByRole('link', { name: 'Continue' });
    await continueBtnAfrDlt.click();

    await expect(loginLink).toBeVisible();

    await page.close();







})