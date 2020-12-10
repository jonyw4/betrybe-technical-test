import React from 'react';
import { mount } from 'cypress-react-unit-test';
import { FormInputError } from './FormInputError.component';

describe('components > FormInputError', () => {
  it('should render a default FormInputError', () => {
    mount(<FormInputError />);
    cy.get('.form-input-error').contains('Esse campo é obrigatório');
  });
  it('should render a FormInputError with custom message correctly', () => {
    mount(<FormInputError message="Campo diferenciado" />);
    cy.get('.form-input-error').contains('Campo diferenciado');
  });
});
