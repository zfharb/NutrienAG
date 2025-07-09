

import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";

import BasicAuthPage from "../pageobjects/basic_auth.page.js";

When(
  /^I use basic auth to login with (\w+) and (.+)$/,
  async (username, password) => {
    await BasicAuthPage.login(username, password);
  }
);

Then(/^I should see a paragraph saying (.+)$/, async (message) => {
  if (await browser.isAlertOpen()) {
    await browser.dismissAlert();
    await expect(BasicAuthPage.notAuthorizedMessage).toBeExisting();
    await expect(BasicAuthPage.notAuthorizedMessage).toHaveTextContaining(message);
  } else {
    await expect(BasicAuthPage.message).toBeExisting();
    await expect(BasicAuthPage.message).toHaveTextContaining(message);
  }
});
