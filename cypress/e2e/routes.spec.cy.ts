describe("Routes navigation", () => {
  it("Home page navigation", () => {
    cy.visit("/");
    cy.url().should("include", "/");
    cy.contains("Rick & Morty API");
  });

  it("Characters page navigation", () => {
    cy.visit("/characters");
    cy.url().should("include", "/characters");
    cy.get('[data-testid="characters-navlink"]').should(
      "have.css",
      "color",
      "rgb(158, 206, 16)"
    );
  });

  it("Episodes page navigation", () => {
    cy.visit("/episodes");
    cy.url().should("include", "/episodes");
    cy.get('[data-testid="episodes-navlink"]').should(
      "have.css",
      "color",
      "rgb(158, 206, 16)"
    );
  });

  it("Locations page navigation", () => {
    cy.visit("/locations");
    cy.url().should("include", "/locations");
    cy.get('[data-testid="locations-navlink"]').should(
      "have.css",
      "color",
      "rgb(158, 206, 16)"
    );
  });

  it("NotFound page navigation", () => {
    cy.visit("/asdf");
    cy.url().should("include", "/asdf");
    cy.get('[aria-label="morty-face"]').should("be.visible");
    cy.get("p").should("be.visible");
  });
});
