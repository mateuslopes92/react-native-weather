import styled from 'styled-components/native';

export const Container = styled.View.attrs({
  flex: 1,
})`
  background-color: ${({theme}) => theme.colors.colorPrimary};
  align-items: center;
`;
