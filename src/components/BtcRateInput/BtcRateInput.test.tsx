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
  it('should render a BtcRateInput and try exec onChange function correctly', () => {
    mount(
      <BtcRateInput
        rate={10}
        title="Titulo"
        onChange={cy.stub().as('onChange')}
      />
    );
    cy.get('.btc-rate__rate').type('5').type('{enter}');
    cy.get('@onChange').should((stub) => {
      expect(stub).to.have.been.called;
    });
  });
});
