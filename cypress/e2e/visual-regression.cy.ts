describe("Take components screenshots", () => {
  beforeEach(() => cy.visit('/episodes'))

  it("Hero image screenshots", () => {
    const hero = cy.get('[data-testid="hero"]')

    hero.argosScreenshot('hero-image-desktop')

    cy.viewport('iphone-x')

    hero.argosScreenshot('hero-image-mobile')
  })

  it("Search-bar screenshots", () => {
    const searchBar = cy.get('input')

    searchBar.argosScreenshot('search-bar-desktop')

    cy.viewport('iphone-x')

    searchBar.argosScreenshot('search-bar-mobile')
  })

  it("Search button", () => {
    const searchButton = cy.get('[data-testid="search-button"]')

    searchButton.argosScreenshot('search-button')
  })

  it("Reset button", () => {
    const resetButton = cy.get('[data-testid="reset-button"]')

    resetButton.argosScreenshot('reset-button')
  })

  it("Page badge and navigation buttons", () => {

    cy.get('[data-testid="page-navigator"]').eq(0).click()

    const pageNavigator = cy.get('[data-testid="page-navigator"]').eq(0)

    pageNavigator.argosScreenshot('page-navigator')
  })

  it("Top button", () => {
    const topButton = cy.get('[data-testid="top-button"]')

    topButton.argosScreenshot('top-button')
  })

  it("Header", () => {
    cy.visit("/")

    const header = cy.get('[data-testid="header"]')

    header.argosScreenshot('header-esktop')

    cy.viewport('iphone-x')

    header.argosScreenshot('header-mobile')
  })

  it("Episode card screenshots", () => {
    cy.visit("/episodes");

    const card = cy.get('[data-testid="card"]').eq(0);

    card.argosScreenshot("pilot-episode-card-desktop");

    cy.viewport("iphone-x");

    card.argosScreenshot("pilot-episode-card-mobile");
  });

  it("Character card screenshots", () => {
    cy.visit("/characters");

    const card = cy.get('[data-testid="c-card"]').eq(0);

    card.argosScreenshot("rick-character-card-front-desktop");

    cy.get('[aria-label="Flip"]').eq(0).click();

    card.argosScreenshot("rick-character-card-back-desktop");

    cy.viewport("iphone-x");

    cy.get('[aria-label="Flip"]').eq(0).click();

    card.argosScreenshot("rick-character-card-front-mobile");

    cy.get('[aria-label="Flip"]').eq(0).click();

    card.argosScreenshot("rick-character-card-back-mobile");
  });

  it("Location card screenshot", () => {
    cy.visit("/locations");

    const card = cy.get('[data-testid="card"]').eq(0);

    card.argosScreenshot("earth-location-card-desktop");

    cy.viewport("iphone-x");

    card.argosScreenshot("earth-location-card-mobile");
  });
});
