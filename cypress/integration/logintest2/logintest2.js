import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { getPassWordInput, getUserNameInput } from "../../support/helper";

Given("I am on the login page", () => {
  cy.visit("https://www.saucedemo.com");
});

When("I input the correct username and password", () => {
  getUserNameInput().clear().type("standard_user");
  getPassWordInput().clear().type("secret_sauce");
});

And("I click on the signin button", () => {
  cy.get("#login-button").click();
});

Then("I should login successfully", () => {
  cy.get("body", { timeout: 10 }).should("contain", "Products");
});

When("I input the {string} and {string}", (username, password) => {
  getUserNameInput().clear().type(username);
  getPassWordInput().clear().type(password);
});

Then("I should get {string} message", (errorMessage) => {
  cy.contains(errorMessage);
});
