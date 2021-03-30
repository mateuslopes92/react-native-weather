import styled from 'styled-components/native';
import {
  CloudSnow,
  CloudRain,
  CloudDrizzle,
  CloudLightning,
  Wind,
  Sun,
  Cloud,
} from 'react-native-feather';

export const Container = styled.View`
  margin-top: 10px;
`;

export const ListTemperatureHours = styled.FlatList``;

export const IconRain = styled(CloudRain)`
  color: ${({theme}) => theme.colors.colorWhite};
`;

export const IconThunderstorm = styled(CloudLightning)`
  color: ${({theme}) => theme.colors.colorWhite};
`;

export const IconDrizzle = styled(CloudDrizzle)`
  color: ${({theme}) => theme.colors.colorWhite};
`;

export const IconSnow = styled(CloudSnow)`
  color: ${({theme}) => theme.colors.colorWhite};
`;

export const IconAtmosphere = styled(Wind)`
  color: ${({theme}) => theme.colors.colorWhite};
`;

export const IconClear = styled(Sun)`
  color: ${({theme}) => theme.colors.colorWhite};
`;

export const IconClouds = styled(Cloud)`
  color: ${({theme}) => theme.colors.colorWhite};
`;

export const ListItemContainer = styled.View`
  margin-left: ${({theme}) => theme.sizes.medium};
  width: ${({theme}) => theme.sizes.temperatureItem};
`;

export const ItemTime = styled.Text`
  font-family: ${({theme}) => theme.fonts.fontNormal};
  color: ${({theme, selected}) =>
    selected ? theme.colors.colorWhite : 'rgba(255, 255, 255, 0.5)'};
  font-size: ${({theme}) => theme.sizes.median};
  text-align: center;
`;

export const TemperatureContainer = styled.TouchableOpacity.attrs({
  borderColor: '#cccc',
  borderWidth: 0.18,
})`
  margin-top: ${({theme}) => theme.sizes.small};
  border-radius: ${({theme}) => theme.sizes.temperatureItemRadius};
  height: ${({theme}) => theme.sizes.temperatureItemBox};
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 10px 0;
  background-color: ${({selected}) =>
    selected ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.1)'};
`;

export const TemperatureText = styled.Text`
  font-family: ${({theme}) => theme.fonts.fontNormal};
  color: ${({theme}) => theme.colors.colorWhite};
  font-size: ${({theme}) => theme.sizes.median};
`;
