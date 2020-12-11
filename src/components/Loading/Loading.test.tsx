import React from 'react';
import { mount } from 'cypress-react-unit-test';
import { Loading } from './Loading.component';

describe('components > Loading', () => {
  it('should render a loading text', () => {
    mount(<Loading />);
    cy.get('span').contains('Carregando...');
  });
});
