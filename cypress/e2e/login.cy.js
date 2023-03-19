describe("login", () => {
  it("passes", () => {
    cy.visit("/login");
    cy.url().should("include", "login");
    cy.get("input[placeholder='email']").type("gplgusgmpldgpdhkox@bbitq.com");
    cy.get("input[placeholder='password']").type("12345678");
    cy.get("button").click();
    cy.contains("bienvenidos a la home").should("be.visible");
    cy.visit("/login");
    cy.contains("bienvenidos a la home").should("be.visible");
  });
});
