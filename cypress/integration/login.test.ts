describe('Login Page', () => {
  it('should try to login only with wrong access and show an alert window', () => {
    cy.visit('/login');
    cy.get('input[name="email"]').type('test@test');
    cy.get('input[name="password"]').type('123');
    cy.get('input[type="submit"]').click();
    cy.get('.alert').should('be.visible');
  });
  it('should try to login and succeed', () => {
    cy.visit('/login');
    cy.get('input[name="email"]').type('test@test');
    cy.get('input[name="password"]').type('123456');
    cy.get('input[type="submit"]').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });
});
