describe('Home Page', () => {
  it('Visit the home page and try to update the value', () => {
    cy.visit('/');
    let brlInputValue: number;

    // Get the original BRL value
    cy.get('input[name="BRL"]').then((elem) => {
      brlInputValue = Cypress.$(elem).val() as number;
    });

    // Update BTC value
    cy.get('input[name="BTC"]').type('10');

    // Get the new value and check if is correct
    cy.get('input[name="BRL"]').should((elem) => {
      const inputValue = Cypress.$(elem).val();
      return brlInputValue * 10 === inputValue;
    });
  });
});
