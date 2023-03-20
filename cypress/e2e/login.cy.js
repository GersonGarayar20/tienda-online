describe("login", () => {
  it("passes", () => {
    cy.visit("/login");
    cy.url().should("", "login");
    cy.get("input[placeholder='Correo electronico']").type(
      "gplgusgmpldgpdhkox@bbitq.com"
    );
    cy.get("input[placeholder='Contraseña']").type("12345678");
    cy.get("button").click();
    cy.contains("Ecommerce").should("be.visible");
    cy.visit("/login");
  });
});
