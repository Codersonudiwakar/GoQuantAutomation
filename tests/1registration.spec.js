const { test, expect } = require('@playwright/test');
const RegistrationPage = require('../pages/RegistrationPage');
const testData = require('../test-data/testData');

test.describe('User Registration Flow', () => {

  test('Successful user registration', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);
    await registrationPage.navigateTo('/register');
    await registrationPage.fillRegistrationForm(testData.validUser);
    await registrationPage.submitForm();
    const successMessage = await registrationPage.getSuccessMessage();
    expect(successMessage).toContain('Registration is successful');
  
  });
});