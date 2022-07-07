import styled from 'styled-components/native';
import {Animated, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const Container = styled.View`
  width: ${width}px;
  background-color: ${({theme}) => theme.colors.colorWhite};
  border-top-right-radius: ${({theme}) => theme.sizes.temperatureItem};
  border-top-left-radius: ${({theme}) => theme.sizes.temperatureItem};
  margin-top: ${({theme}) => theme.sizes.median};
  padding: 8px 20px 20px 20px;
`;

export const Row = styled.View.attrs({
  borderBottomColor: '#cccc',
  borderBottomWidth: 1,
})`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 12px 20px;
`;

export const Column = styled(Animated.View)`
  justify-content: space-between;
  margin-top: ${({theme}) => theme.sizes.median};
  margin-left: ${({theme}) => theme.sizes.medium};
  width: 50%;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.fontNormal};
  color: ${({theme}) => theme.colors.colorPrimary};
  font-size: ${({theme}) => theme.sizes.median};
`;

export const InfoText = styled.Text`
  font-family: ${({theme}) => theme.fonts.fontNormal};
  color: ${({theme}) => theme.colors.colorPrimary};
  font-size: ${({theme}) => theme.sizes.large};
`;
