const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const testData = require('../test-data/testData');

test.describe('Login/Logout Functionality', () => {
 
  test('Successful login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateTo('/login');
    await loginPage.login(testData.validUser.username, testData.validUser.password);
    
  });

  
   test('Successful Logout test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateTo('/profile');
    await loginPage.login(testData.validUser.username, testData.validUser.password);
    await loginPage.logout();
  });
});