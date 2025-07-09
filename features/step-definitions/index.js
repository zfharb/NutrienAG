import { Given, When, Then } from "@wdio/cucumber-framework";
import Page from "../pageobjects/page.js";
const index = new Page();

Given(/^I am on the (.+) page$/, async (page) => {
  await index.open(page);
});

Given("I am at the index page", async function () {
  await index.open();
});

When(/^I click the (.+) link$/, async function (page) {
  this.page = page;
  await index.click(page);
});

Then("I should be driected to the selected page", async function () {
  if (await browser.isAlertOpen()) {
    await browser.dismissAlert();
  } 
  const html = (await $("*").getHTML()).toString();
  expect(html).toContain(`${index.pageHeader[this.page]}`);
});
