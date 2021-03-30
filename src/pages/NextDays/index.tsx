import {useNavigation} from '@react-navigation/core';
import React, {useContext} from 'react';
import {Platform, StatusBar} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

import {WeatherContext} from '../../hooks/WeatherContext';
import {tokens} from '../../tokens';
import {
  Container,
  HeaderContainer,
  LocationText,
  ArrowLeft,
  HeaderContent,
  Title,
  IconRain,
  IconThunderstorm,
  IconDrizzle,
  IconSnow,
  IconAtmosphere,
  IconClear,
  IconClouds,
  Content,
  Row,
  RowContainer,
  DayText,
  MaxText,
  MinText,
} from './styles';

const NextDays: React.FC = () => {
  const {location, daily} = useContext(WeatherContext);
  const navigation = useNavigation();

  const getDataFormated = (date: number) => {
    var newDate = new Date(date * 1000);
    newDate.toUTCString();
    return String(newDate).substring(0, 11);
  };

  const getIcon = (type: string) => {
    var icon;
    switch (type) {
      case 'Rain':
        icon = <IconRain />;
        break;
      case 'Thunderstorm':
        icon = <IconThunderstorm />;
        break;
      case 'Drizzle':
        icon = <IconDrizzle />;
        break;
      case 'Snow':
        icon = <IconSnow />;
        break;
      case 'Atmosphere':
        icon = <IconAtmosphere />;
        break;
      case 'Clear':
        icon = <IconClear />;
        break;
      case 'Clouds':
        icon = <IconClouds />;
        break;
      default:
        icon = <IconRain />;
        break;
    }

    return icon;
  };

  const renderItem = item => {
    return (
      <Row>
        <RowContainer>
          {getIcon(item?.item?.weather[0].main)}
          <DayText>{getDataFormated(item?.item?.dt)}</DayText>
        </RowContainer>
        <RowContainer>
          <MaxText>{item?.item?.temp?.max.toFixed(0)}°C</MaxText>
          <MinText>{item?.item?.temp?.min.toFixed(0)}°C</MinText>
        </RowContainer>
      </Row>
    );
  };

  return (
    <Container>
      <StatusBar barStyle={'dark-content'} backgroundColor="#eee" />
      <SafeAreaView edges={['top']} />
      <HeaderContainer>
        <ArrowLeft height={32} width={32} onPress={() => navigation.goBack()} />
        <LocationText>{location?.city}</LocationText>
      </HeaderContainer>
      <HeaderContent>
        <Title>Next 7 Days</Title>
      </HeaderContent>
      <Content>
        <FlatList
          data={daily}
          renderItem={renderItem}
          keyExtractor={item => String(item.dt)}
          showsHorizontalScrollIndicator={false}
        />
      </Content>
    </Container>
  );
};

export default NextDays;
