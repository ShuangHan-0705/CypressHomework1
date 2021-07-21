import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { getPassWordInput, getUserNameInput } from "../../support/helper";

Given("I am on the login page", () => {
  cy.visit("https://www.saucedemo.com");
});

When("I input the correct username and password", () => {
  getUserNameInput().clear().type("standard_user");
  getPassWordInput().clear().type("secret_sauce");
});

When("I input the locked out username and password", () => {
  getUserNameInput().clear().type("locked_out_user");
  getPassWordInput().clear().type("secret_sauce");
});

When("I input the correct username and incorrect password", () => {
  getUserNameInput().clear().type("standard_user");
  getPassWordInput().clear().type("123456789");
});

When("I input the correct username and empty password", () => {
  getUserNameInput().clear().type("standard_user");
});

And("I click on the signin button", () => {
  cy.get("#login-button").click();
});

Then("I should login successfully", () => {
  cy.get("body", { timeout: 10 }).should("contain", "Products");
});

Then("I should get user has been locked out error", () => {
  cy.contains("Sorry, this user has been locked out.");
});

Then("I should get {string} error", (errorMessage) => {
  cy.contains(errorMessage);
});
