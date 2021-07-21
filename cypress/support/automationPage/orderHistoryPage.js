export class OrderHistoryPage {
  goHome() {
    cy.get('a[href="http://automationpractice.com"]').click();
  }

  goBackToAccount() {
    cy.get(".button").contains("Back to your account").click();
  }

  getOrders() {
    return cy.get("tbody>tr");
  }
}

export const orderHistoryPage = new OrderHistoryPage();
