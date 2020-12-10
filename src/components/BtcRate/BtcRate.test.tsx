import React from 'react';
import { mount } from 'cypress-react-unit-test';
import { BtcRate } from './BtcRate.component';

describe('components > BtcRate', () => {
  it('should render a default BtcRate correctly', () => {
    mount(<BtcRate rate="10" title="Titulo" />);
    cy.get('.btc-rate').should('be.visible');
    cy.get('.btc-rate__title').contains('Titulo');
    cy.get('.btc-rate__rate').contains('10');
  });
});
