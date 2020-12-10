import * as React from 'react';
import renderer from 'react-test-renderer';
import { FormInputError } from './FormInputError.component';

describe('components > FormInputError', () => {
  it('should renders a default FormInputError correctly', () => {
    const tree = renderer.create(<FormInputError />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should renders a FormInputError with custom message correctly', () => {
    const tree = renderer
      .create(<FormInputError message="Campo diferenciado" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
