describe('Update Page', () => {
  it('should try to login only without auth and show an alert window', () => {
    cy.clearLocalStorage();
    cy.visit('/update');
    cy.get('select').type('BRL');
    cy.get('input[name="value"]').type('10');
    cy.get('input[type="submit"]').click();
    cy.get('.alert').should('be.visible');
  });
  it('should try to login and update an value and succeed', () => {
    cy.clearLocalStorage();
    // Login First
    cy.visit('/login');
    cy.get('input[name="email"]').type('test@test');
    cy.get('input[name="password"]').type('123456');
    cy.get('input[type="submit"]').click();

    // Check if goes to home page
    cy.url().should('eq', Cypress.config().baseUrl + '/');

    // Try to update
    cy.visit('/update');
    cy.get('select').type('BRL');
    cy.get('input[name="value"]').type('10');
    cy.get('input[type="submit"]').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });
});
