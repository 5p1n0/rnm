describe("test query filter on all pages", () => {
  it("character filter", () => {
    cy.visit("/characters");
    cy.window().then(($win) => {
      $win.history.replaceState({ usr: { name: "Piece" } }, "");

      cy.get('[data-testid="card-title"]')
      .eq(0)
      .should('be.visible')
      .contains(/Piece/i);
    });
  });

  it("episode filter", () => {
    cy.visit("/episodes");
    cy.window().then(($win) => {
      $win.history.replaceState({ usr: { name: "Rickmurai" } }, "");

      cy.get('[data-testid="card-title"]')
        .eq(0)
        .contains(/Rickmurai/i);
    });
  });

  it("location filter", () => {
    cy.visit("/locations");
    cy.window().then(($win) => {
      $win.history.replaceState({ usr: { name: "Gazorpazorp" } }, "");

      cy.get('[data-testid="card-title"]')
        .eq(0)
        .contains(/Gazorpazorp/i);
    });
  });
});
