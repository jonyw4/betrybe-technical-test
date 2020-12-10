import React from 'react';
import renderer from 'react-test-renderer';
import { Alert } from './Alert.component';

describe('components > Alert', () => {
  it('should renders a default alert correctly', () => {
    const tree = renderer.create(<Alert>Alerta Padrão</Alert>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should renders a warning alert correctly', () => {
    const tree = renderer
      .create(<Alert type="warning">Alerta de Aviso</Alert>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
