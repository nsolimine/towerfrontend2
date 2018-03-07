

describe('page content', function () {
  it('works', function () {
    cy.visit('http://localhost:3000');
    cy.get("h1").should("have.text", "Song Tower");
    cy.get("section").should("have.length", 2);
    cy.get("form").within(($form) => {
     cy.get('input[name="difficulty"]').type("Difficulty");
   });
  });
});
