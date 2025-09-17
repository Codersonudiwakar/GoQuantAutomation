const BasePage = require('./BasePage');

class RegistrationPage extends BasePage {
  constructor(page) {
    super(page);
    this.usernameInput = '#username';
    this.firstNameInput = '#firstName';
    this.lastNameInput = '#lastName';
    this.passwordInput = '#password';
    this.confirmPasswordInput = '#confirmPassword';
    this.submitButton = "//button[text()='Register']";
    this.errorMessage = '//div[@class="result alert alert-danger"]';  
    this.successMessage = '//div[@class="result alert alert-success"]'; 
  }

  async fillRegistrationForm(userData) {
    await this.page.waitForTimeout(1000);
    await this.fillWithValidation(this.usernameInput, userData.username);
    await this.page.waitForTimeout(1000);
    await this.fillWithValidation(this.firstNameInput, userData.firstName);
    await this.page.waitForTimeout(1000);
    await this.fillWithValidation(this.lastNameInput, userData.lastName);
    await this.page.waitForTimeout(1000);
    await this.fillWithValidation(this.passwordInput, userData.password);
    await this.page.waitForTimeout(1000);
    await this.fillWithValidation(this.confirmPasswordInput, userData.password);
    await this.page.waitForTimeout(1000);
  }

  async submitForm() {
    await this.clickWithRetry(this.submitButton);
    await this.page.waitForTimeout(2000);
  }

  async getErrorMessage() {
    try {
      await this.waitForElement(this.errorMessage, { timeout: 5000 });
      return await this.page.textContent(this.errorMessage);
    } catch {
      return null;
    }
  }

  async getSuccessMessage() {
    try {
      await this.waitForElement(this.successMessage, { timeout: 5000 });
      return await this.page.textContent(this.successMessage);
    } catch {
      return null;
    }
  }
}

module.exports = RegistrationPage;
