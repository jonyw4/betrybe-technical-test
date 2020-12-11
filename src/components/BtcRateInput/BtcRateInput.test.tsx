import React from 'react';
import { mount } from 'cypress-react-unit-test';
import { BtcRateInput } from './BtcRateInput.component';

describe('components > BtcRateInput', () => {
  it('should render a default BtcRateInput correctly', () => {
    mount(<BtcRateInput rate={10} title="Titulo" />);
    cy.get('.btc-rate').should('be.visible');
    cy.get('.btc-rate__title').contains('Titulo');
    cy.get('.btc-rate__rate').should('have.value', '10');
  });
  it('should render a disabled BtcRateInput correctly', () => {
    mount(<BtcRateInput rate={10} title="Titulo" disabled />);
    cy.get('.btc-rate').should('be.visible');
    cy.get('.btc-rate__title').contains('Titulo');
    cy.get('.btc-rate__rate').should('be.disabled');
  });
  it('should render a BtcRateInput and try exec onClick function correctly', () => {
    const onClick = () => null;
    cy.spy(onClick);
    mount(<BtcRateInput rate={10} title="Titulo" onChange={onClick} />);
    cy.get('.btc-rate__rate')
      .type('5')
      .should(() => expect(onClick).to.be.calledOnce);
  });
});
