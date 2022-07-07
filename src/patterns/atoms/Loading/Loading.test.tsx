import React from 'react';
import Loading from '.';
import { render } from '@testing-library/react-native';

test('Render loading component', () => {
  const { getByTestId } = render(<Loading />);

  const loadingComponent = getByTestId('loading-container');

  expect(loadingComponent).toBeDefined();
});
