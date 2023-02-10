describe("Simulate user behaviour", () => {
  it("navigate to character page", () => {
    cy.visit("/characters");
  });

  it("flip card in both ways ", () => {
    cy.get('[data-testid="c-card"]')
      .eq(0)
      .should("have.css", "transform", "none");

    cy.get('[aria-label="Flip"]').eq(0).click();

    cy.get('[data-testid="c-card"]')
      .eq(0)
      .should("not.have.css", "transform", "none");

    cy.get("p").contains(/Appears/i);

    cy.get('[aria-label="Flip"]').eq(0).click();

    cy.get('[data-testid="c-card"]')
      .eq(0)
      .should("have.css", "transform", "none");

    cy.get("p").eq(0).contains(/Last/i);
  });

  it("click first card link (last location)", () => {
    cy.get('[data-testid="card-link"]')
      .eq(0)
      .click()
      .then(($el) => {
        cy.get('[data-testid="card-title"]').contains($el.text());
      });

    cy.get('[data-testid="characters-navlink"]').click();
  });

  it("click second card link (origin)", () => {
    cy.get('[data-testid="card-link"]')
      .eq(1)
      .click()
      .then(($el) => {
        cy.get('[data-testid="card-title"]').contains($el.text());
      });

    cy.get('[data-testid="characters-navlink"]').click();
  });

  it("click a episode card link", () => {
    cy.get('[aria-label="Flip"]').eq(0).click();

    cy.get('[data-testid="card-link"]')
      .eq(2)
      .click({ force: true })
      .then(($el) => {
        cy.get('[data-testid="card-title"]').contains($el.text());
      });

    cy.get('[data-testid="characters-navlink"]').click();
  });

  it("check prev page button", () => {
    cy.get('[data-testid="prev"]').should("not.be.visible");
  });

  it("check next page button", () => {
    cy.get('[data-testid="next"]').eq(0).should("be.visible").should("have.text", '2');
  });

  it("check actual page badge", () => {
    cy.get('[data-testid="actual"]')
      .eq(0)
      .should("be.visible")
      .should("have.text", "1");
  });

  it("search a character", () => {
    cy.get("input").type("Guy");

    cy.get('[data-testid="search-button"').click();

    cy.get('[data-testid="card-title"').contains(/Guy/i);
  });

  it("wipe search", () => {
    cy.get('[data-testid="reset-button"').click();

    cy.get('[data-testid="card-title"').eq(0).contains("Rick Sanchez");
  });
});
