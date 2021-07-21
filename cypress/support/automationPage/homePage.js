export class HomePage {
  visit() {
    cy.visit("http://automationpractice.com/index.php");
  }

  login() {
    cy.get(".login").click();
    cy.get('input[id="email"]').clear().type("testweb@gmail.com");
    cy.get('input[id="passwd"]').clear().type("123456789");
    cy.get("#SubmitLogin").click();
  }

  search(keyword) {
    cy.get('input[name="search_query"]').clear().type(keyword);
    cy.get('button[name="submit_search"]').click();
  }

  hoverin(num) {
    //cy.get("ul.homefeatured>li:nth-of-type(num)").invoke("show").click();

    //The following two both work
    //cy.get("ul[id=homefeatured]>li").eq(num).invoke("show").click();
    cy.get("ul[id=homefeatured]>li").eq(num).trigger("mouseover");
  }

  quickview(num) {
    //sometimes click() is not workingin the following way???
    // cy.get("ul[id=homefeatured]>li")
    //   .eq(num)
    //   .contains("Quick view")
    //   .click({ force: true });

    cy.get("ul[id=homefeatured]>li")
      .eq(num)
      .find('a[class="quick-view-mobile"]')
      .click({ force: true });
  }

  //How to click the quick view of the hover item???
  // cy.get("ul[id=homefeatured]>li")
  //   .eq(num)
  //   .invoke("show")   What is invoke used for?
  //   .get('a[class="quick-view-mobile"]')   What is the difference between get and find?
  //   .click();

  hoverout() {
    cy.get("div.header-container").trigger("mouseover");
  }

  logout() {
    cy.get('a[class="logout"]').click();
  }
}

export const homePage = new HomePage();
