import React from 'react';
import { useTheme } from 'styled-components';

import { Container, CustomLoading } from './styles';

interface LoadingProps {
  color?: string;
}

const Loading: React.FC<LoadingProps> = ({ color  }) => {
  const theme = useTheme();
  const defaultColor = theme?.colors?.colorWhite;
  const loadingColor = color || defaultColor;

  return (
    <Container testID="loading-container">
      <CustomLoading color={loadingColor} size="large" />
    </Container>
  );
}

export default Loading;