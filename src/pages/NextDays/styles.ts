import styled from 'styled-components/native';
import {
  CloudSnow,
  CloudRain,
  CloudDrizzle,
  CloudLightning,
  Wind,
  Sun,
  Cloud,
  ChevronLeft,
} from 'react-native-feather';
import { Animated } from 'react-native';

export const Container = styled.View`
  flex: 1;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: ${({theme}) => theme.sizes.medium};
  padding: 20px;
`;

export const LocationText = styled.Text`
  color: ${({theme}) => theme.colors.colorPrimary};
  font-family: ${({theme}) => theme.fonts.fontMedium};
  margin-right: ${({theme}) => theme.sizes.smallest};
  font-size: ${({theme}) => theme.sizes.medium};
`;

export const ArrowLeft = styled(ChevronLeft)`
  color: ${({theme}) => theme.colors.colorPrimary};
  position: absolute;
  left: 10px;
`;

export const HeaderContent = styled.View`
  margin-top: ${({theme}) => theme.sizes.larger};
  padding: 0 20px 20px 20px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.colorPrimary};
  font-family: ${({theme}) => theme.fonts.fontMedium};
  margin-right: ${({theme}) => theme.sizes.smallest};
  font-size: ${({theme}) => theme.sizes.temperatureItemRadius};
`;

export const IconRain = styled(CloudRain)`
  color: ${({theme}) => theme.colors.colorPrimary};
`;

export const IconThunderstorm = styled(CloudLightning)`
  color: ${({theme}) => theme.colors.colorPrimary};
`;

export const IconDrizzle = styled(CloudDrizzle)`
  color: ${({theme}) => theme.colors.colorPrimary};
`;

export const IconSnow = styled(CloudSnow)`
  color: ${({theme}) => theme.colors.colorPrimary};
`;

export const IconAtmosphere = styled(Wind)`
  color: ${({theme}) => theme.colors.colorPrimary};
`;

export const IconClear = styled(Sun)`
  color: ${({theme}) => theme.colors.colorPrimary};
`;

export const IconClouds = styled(Cloud)`
  color: ${({theme}) => theme.colors.colorPrimary};
`;

export const Content = styled.View`
  background-color: ${({theme}) => theme.colors.colorWhite};
  flex: 1;
`;

export const Row = styled.View.attrs({
  borderBottomColor: '#cccc',
  borderBottomWidth: 1,
})`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const RowContainer = styled(Animated.View)`
  flex-direction: row;
  align-items: center;
`;

export const DayText = styled.Text`
  color: ${({theme}) => theme.colors.colorPrimary};
  font-family: ${({theme}) => theme.fonts.fontMedium};
  margin-left: ${({theme}) => theme.sizes.larger};
  font-size: ${({theme}) => theme.sizes.medium};
`;

export const MaxText = styled.Text`
  color: ${({theme}) => theme.colors.colorPrimary};
  font-family: ${({theme}) => theme.fonts.fontBold};
  margin-left: ${({theme}) => theme.sizes.larger};
  font-size: ${({theme}) => theme.sizes.medium};
`;

export const MinText = styled.Text`
  color: ${({theme}) => theme.colors.colorWhiteAlpha};
  font-family: ${({theme}) => theme.fonts.fontNormal};
  margin-left: ${({theme}) => theme.sizes.larger};
  font-size: ${({theme}) => theme.sizes.medium};
  text-align: right;
`;
