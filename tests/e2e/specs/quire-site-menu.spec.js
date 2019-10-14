describe("Quire Site Menu", () => {
  beforeEach(function() {
    cy.visit("/");
  });

  it("toggles the side menu", () => {
    cy.get("#site-menu").should("not.be.visible");
    cy.get("#quire-controls-menu-button").click();
    cy.get("#site-menu").should("be.visible");
    cy.get("#quire-controls-menu-button").click();
    cy.get("#site-menu").should("not.be.visible");
  });

  it("should have a title", () => {
    cy.get(".quire-menu__header__title").should("exist");
  });

  it("should have other formats", () => {
    cy.get("div.quire-menu__formats:nth-child(3) h6").should("exist");
    cy.get("div.quire-menu__formats:nth-child(3) ul li").should(
      "have.length",
      3
    );
  });

  it("should have cite this page", () => {
    cy.get("div.quire-menu__formats:nth-child(4) h6").should("exist");
    cy.get("div.quire-menu__formats:nth-child(4) div").should("have.length", 2);
  });
});
