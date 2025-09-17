const BasePage = require('./BasePage');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.loginInput = '//input[@name="login"]';
    this.passwordInput = '//input[@name="password"]';
    this.loginButton = '//button[text()="Login"]';
    this.logoutButton = '//a[text()="Logout"]';
    this.errorMessage = '.login-error';
    this.welcomeMessage = '.welcome-message';
  }

  async login(username, password) {
    await this.page.waitForTimeout(1000);
    await this.waitForElement(this.loginInput);
    await this.page.waitForTimeout(1000);
    await this.page.fill(this.loginInput, username);
    await this.page.waitForTimeout(1000);
    await this.page.fill(this.passwordInput, password);
    await this.page.waitForTimeout(1000);
    await this.page.click(this.loginButton);
    await this.page.waitForTimeout(1000);
    await this.page.locator(this.logoutButton).isVisible();
    console.log(`Logged in Successfully`);


  }

  async logout() {
    await this.waitForElement(this.logoutButton);
    await this.page.click(this.logoutButton);
    console.log(`Logged out Successfully`);
  }

  async getErrorMessage() {
    await this.waitForElement(this.errorMessage);
    return await this.getText(this.errorMessage);
  }

  async isLoggedIn() {
    return await this.isElementVisible(this.welcomeMessage);
  }
}

module.exports = LoginPage;