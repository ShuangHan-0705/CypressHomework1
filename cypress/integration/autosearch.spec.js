import { homePage } from "../support/automationPage/homePage";

describe("Test search function", () => {
  before(() => {
    homePage.visit();
  });
  it("Search dress items", () => {
    homePage.search("Dress");
    cy.get(".product_list").children().should("have.length", 7);

    //This one is working
    //cy.get(".product_list").children("li").should("have.length", 7);

    //This is not working
    //cy.get("ul[id=homefeatured]").children("li").should("have.length", 7);

    //Can see 7 items in Inspector???
    //cy.get("ul[id=homefeatured]>li").should("have.length", 7);
  });

  it("Search summer items", () => {
    homePage.search("summer");
    cy.get(".product_list").children().should("have.length", 4);
  });

  it("Search glasses items", () => {
    homePage.search("glasses");
    cy.contains("No results were found for your search").should("be.visible");
  });

  after(() => {});
});
