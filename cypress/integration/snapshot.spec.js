describe("snapshot based visual testing", () => {
  it.only("should be able to compare entire snapshot of login page", () => {
    cy.visit("http://localhost:8000");
    cy.matchImageSnapshot();
  });

  it("should be able to compare snapsht for an element of login page", () => {
    cy.visit("http://localhost:8000");
    cy.get(".new-todo").matchImageSnapshot("todoInput");
  });
});
