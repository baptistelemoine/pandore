describe("detail page", () => {
  it("should display the detail page and display character name", () => {
    cy.server();
    cy.route(/characters/).as("getCharacter");
    cy.visit("/details/1011334");
    cy.wait("@getCharacter");
    cy.queryByText(/3-D Man/i).should("exist");
  });

  it("should add item as favorite", () => {
    cy.clearLocalStorage();
    cy.server();
    cy.route(/characters/).as("getCharacter");
    cy.visit("/details/1011334");
    cy.wait("@getCharacter");
    cy.get("[data-test=detail-toggle-favorite]")
      .click()
      .should(() => {
        expect(localStorage.getItem("favorites")).to.include(1011334);
      });
  });
});
