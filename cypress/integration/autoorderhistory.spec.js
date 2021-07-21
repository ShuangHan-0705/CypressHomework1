import { orderHistoryPage } from "../support/automationPage/orderHistoryPage";
import { homePage } from "../support/automationPage/homePage";
import { accountPage } from "../support/automationPage/accountPage";

describe("Test order history page", () => {
  beforeEach(() => {
    homePage.visit();
    homePage.login();
  });

  it("check order numbers", () => {
    accountPage.goOrderHistory();
    orderHistoryPage.getOrders().should("have.length", 2);
  });

  //This case failed because the system signed out after clicking on the "Go back to account", don't know why???
  it("Go back to account page", () => {
    accountPage.goOrderHistory();
    orderHistoryPage.goBackToAccount();
    cy.contains("Order history and details").should("be.visible");
  });

  after(() => {
    homePage.logout();
  });
});
