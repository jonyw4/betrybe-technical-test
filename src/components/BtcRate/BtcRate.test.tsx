import * as React from 'react';
import renderer from 'react-test-renderer';
import { BtcRate } from './BtcRate.component';

describe('components > BtcRate', () => {
  it('should renders a BtcRate correctly', () => {
    const tree = renderer.create(<BtcRate rate="10" title="BRL" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
