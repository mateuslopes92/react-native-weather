import {useNavigation} from '@react-navigation/core';
import React, {useContext, useEffect} from 'react';
import {Animated, StatusBar, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {WeatherContext} from '../../hooks/WeatherContext';
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
  const translate = new Animated.Value(400);
  const {location, daily, loading} = useContext(WeatherContext);
  const navigation = useNavigation();
  const rowAnimationStyle = {
    transform: [
      {
        translateX: translate
      }
    ]
  };

  useEffect(() => {
    if (!loading) {
      Animated.timing(translate, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true
      }).start();
    }
  },[loading]);

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
        <RowContainer style={rowAnimationStyle}>
          {getIcon(item?.item?.weather[0].main)}
          <DayText>{getDataFormated(item?.item?.dt)}</DayText>
        </RowContainer>
        <RowContainer style={rowAnimationStyle}>
          <MaxText>{item?.item?.temp?.max.toFixed(0)}°C</MaxText>
          <MinText>{item?.item?.temp?.min.toFixed(0)}°C</MinText>
        </RowContainer>
      </Row>
    );
  };

  return (
    <Container>
      <StatusBar barStyle='dark-content' backgroundColor="#eeeeee" />
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
          showsVerticalScrollIndicator={false}
        />
      </Content>
    </Container>
  );
};

export default NextDays;
