import React from 'react';
import { mount } from 'cypress-react-unit-test';
import { Alert } from './Alert.component';

describe('components > Alert', () => {
  it('should render a default alert correctly', () => {
    mount(<Alert>Alerta Padrão</Alert>);
    cy.get('.alert').should('have.class', 'alert--default');
  });
  it('should render a warning alert correctly', () => {
    mount(<Alert type="warning">Alerta de Aviso</Alert>);
    cy.get('.alert').should('have.class', 'alert--warning');
  });
});
