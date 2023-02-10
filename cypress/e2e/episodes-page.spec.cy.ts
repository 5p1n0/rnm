describe("Simulate user behaviour", () => {
  it("navigate to episodes page", () => {
    cy.visit("/episodes");
  });

  it("check prev page button", () => {
    cy.get('[data-testid="prev"]').eq(0).should("not.be.visible");
  });

  it("check next page button", () => {
    cy.get('[data-testid="next"]').eq(0).should("be.visible").should("have.text", "2");
  });

  it("check actual page badge", () => {
    cy.get('[data-testid="actual"]')
      .eq(0)
      .should("be.visible")
      .should("have.text", "1");
  });

  it("click a character card link", () => {
    cy.get('[data-testid="card-link"]')
      .eq(0)
      .click()
      .then(($el) => {
        cy.get('[data-testid="card-title"]').contains($el.text());
      });

    cy.get('[data-testid="episodes-navlink"]').click();
  });

  it("search a episode", () => {
    cy.get("input").type("Vindicators");

    cy.get('[data-testid="search-button"').click();

    cy.get('[data-testid="card-title"').contains(/Vindicators/i);
  });

  it("wipe search", () => {
    cy.get('[data-testid="reset-button"').click();

    cy.get('[data-testid="card-title"').eq(0).contains("Pilot");
  });
});
