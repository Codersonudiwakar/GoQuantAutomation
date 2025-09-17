class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigateTo(path) {
    await this.page.goto(path, { waitUntil: 'domcontentloaded' });
  }

  async fillWithValidation(selector, value) {
    await this.page.waitForSelector(selector, { state: 'visible' });
    await this.page.fill(selector, value);
  }

  async clickWithRetry(selector, retries = 2) {
    for (let attempt = 0; attempt <= retries; attempt++) {
      try {
        await this.page.waitForSelector(selector, { state: 'visible' });
        await this.page.click(selector);
        return;
      } catch (err) {
        if (attempt === retries) throw err;
        await this.page.waitForTimeout(500); // small retry delay
      }
    }
  }

  async waitForElement(selector, options = {}) {
    await this.page.waitForSelector(selector, { state: 'visible', ...options });
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState('domcontentloaded');
  }
}

module.exports = BasePage;
