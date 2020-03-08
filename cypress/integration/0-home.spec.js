describe("home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display the home page and display main title", () => {
    cy.urlPathShouldEqual(`/`);
    cy.queryByText(/characters list/i).should("exist");
  });

  it("should request api and display a list of 20 items", () => {
    cy.server();
    cy.route(/characters/).as("getCharacters");
    cy.visit("/");
    cy.wait("@getCharacters");
    cy.get("[data-test=list-item]").should("have.length", 20);
  });

  it("should display 40 items by loading more items", () => {
    cy.server();
    cy.route(/characters/).as("getCharacters");
    cy.visit("/");
    cy.wait("@getCharacters");
    cy.get("[data-test=load-more-cta]").click();
    cy.get("[data-test=list-item]").should("have.length", 40);
  });

  it("should have well formatted link items and navigate to detail", () => {
    cy.server();
    cy.route(/characters/).as("getCharacters");
    cy.visit("/");
    cy.wait("@getCharacters");
    cy.get("[data-test=link-item]")
      .first()
      .should("have.attr", "href")
      .and("include", "details");
    cy.get("[data-test=link-item]")
      .first()
      .click();
    cy.url().should("include", "/details");
  });
});
