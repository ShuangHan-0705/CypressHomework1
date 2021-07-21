import { homePage } from "../support/automationPage/homePage";

describe("Test hover function", () => {
  before(() => {
    homePage.visit();
  });

  it("Test hover in one item", () => {
    homePage.hoverin(1);
    cy.get(".button-container").should("be.visible");

    //The second way
    //cy.get('a[data-id-product="2"]').should("be.visible");
  });

  it("Test on hover out one item", () => {
    homePage.hoverout();
    cy.contains("data-id-product").should("not.exist");
  });

  it("Test quick view of a hover in item", () => {
    homePage.hoverin(2);
    homePage.quickview(2);
    cy.get("#quantity_wanted").should("be.visible");
  });

  after(() => {
    //Can I do that?
    homePage.visit();
  });
});
