import styled from 'styled-components/native';
import {RefreshCw, ChevronRight, CornerRightDown} from 'react-native-feather';
import {Animated, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const Container = styled.View`
  width: ${width}px;
  padding-bottom: -10px;
`;

export const HeaderContainer = styled(Animated.View)`
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;

export const ButtonChangeLocation = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonChangeLocationText = styled.Text`
  color: ${({theme}) => theme.colors.colorWhite};
  font-family: ${({theme}) => theme.fonts.fontMedium};
  margin-right: ${({theme}) => theme.sizes.smallest};
  font-size: ${({theme}) => theme.sizes.medium};
`;

export const ButtonChangeLocationIcon = styled(RefreshCw)`
  color: ${({theme}) => theme.colors.colorWhite};
  margin-left: ${({theme}) => theme.sizes.smallest};
`;

export const HeaderInfo = styled.View``;

export const DateContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const DateText = styled(Animated.Text)`
  color: ${({theme}) => theme.colors.colorWhite};
  font-family: ${({theme}) => theme.fonts.fontMedium};
  font-size: ${({theme}) => theme.sizes.large};
  margin-top: ${({theme}) => theme.sizes.large};
`;

export const DateFull = styled.Text`
  color: ${({theme}) => theme.colors.colorWhite};
  font-family: ${({theme}) => theme.fonts.fontNormal};
  font-size: ${({theme}) => theme.sizes.median};
  margin-top: ${({theme}) => theme.sizes.smallest};
`;

export const TemperatureContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const TemperatureText = styled(Animated.Text)`
  color: ${({theme}) => theme.colors.colorWhite};
  font-family: ${({theme}) => theme.fonts.fontMedium};
  font-size: ${({theme}) => theme.sizes.temperature};
`;

export const TemperatureMeasure = styled.Text`
  color: ${({theme}) => theme.colors.colorWhite};
  font-family: ${({theme}) => theme.fonts.fontNormal};
  font-size: ${({theme}) => theme.sizes.larger};
  position: absolute;
  top: ${({theme}) => theme.sizes.smallest};
`;

export const TemperatureFeels = styled.Text`
  color: ${({theme}) => theme.colors.colorWhite};
  font-family: ${({theme}) => theme.fonts.fontNormal};
  font-size: ${({theme}) => theme.sizes.median};
`;

export const DaysContainer = styled.View.attrs({
  borderBottomColor: '#eee',
  borderBottomWidth: 0.2,
})`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 16px 8px 16px;
`;

export const LeftContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RightContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity``;

export const TodayText = styled.Text`
  font-family: ${({theme}) => theme.fonts.fontNormal};
  color: ${({theme}) => theme.colors.colorWhite};
  font-size: ${({theme}) => theme.sizes.medium};
`;

export const CornerDown = styled(CornerRightDown)`
  color: ${({theme}) => theme.colors.colorWhite};
  margin-left: ${({theme}) => theme.sizes.smallest};
  margin-top: ${({theme}) => theme.sizes.small};
`;

export const NextDaysText = styled.Text`
  font-family: ${({theme}) => theme.fonts.fontNormal};
  color: ${({theme}) => theme.colors.colorBlue};
  font-size: ${({theme}) => theme.sizes.medium};
`;

export const ArrowRight = styled(ChevronRight)`
  color: ${({theme}) => theme.colors.colorBlue};
  margin-top: 2px;
`;
