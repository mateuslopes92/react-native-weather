import {useNavigation} from '@react-navigation/core';
import React, {useContext, useEffect} from 'react';

import {WeatherContext} from '../../hooks/WeatherContext';
import ListTemperature from '../ListTemperature';
import {
  Container,
  HeaderContainer,
  ButtonChangeLocation,
  ButtonChangeLocationText,
  ButtonChangeLocationIcon,
  HeaderInfo,
  DateContainer,
  DateText,
  DateFull,
  TemperatureContainer,
  TemperatureText,
  TemperatureMeasure,
  TemperatureFeels,
  DaysContainer,
  LeftContainer,
  RightContainer,
  Button,
  TodayText,
  NextDaysText,
  ArrowRight,
  CornerDown,
} from './styles';

const Header: React.FC = () => {
  const {current, location, getPosition, setSelectedIndex} = useContext(
    WeatherContext,
  );

  const navigation = useNavigation();

  useEffect(() => {
    getPosition();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getDataFormated = (date: number) => {
    var newDate = new Date(date * 1000);
    newDate.toUTCString();
    return String(newDate).substring(0, 11);
  };

  return (
    <Container>
      <HeaderContainer>
        <ButtonChangeLocation
          onPress={() => {
            getPosition();
            setSelectedIndex(0);
          }}>
          <ButtonChangeLocationText>{location?.city}</ButtonChangeLocationText>
          <ButtonChangeLocationIcon width={16} height={16} />
        </ButtonChangeLocation>
      </HeaderContainer>
      <HeaderInfo>
        <DateContainer>
          <DateText>Today</DateText>
          <DateFull>{getDataFormated(current?.dt)}</DateFull>
        </DateContainer>
        <TemperatureContainer>
          <TemperatureText>
            {current?.temp?.toFixed(0)}
            <TemperatureMeasure>°C</TemperatureMeasure>
          </TemperatureText>
          <TemperatureFeels>
            Feels like {current?.feels_like?.toFixed(0)}°C
          </TemperatureFeels>
        </TemperatureContainer>
      </HeaderInfo>
      <DaysContainer>
        <LeftContainer>
          <TodayText>Today</TodayText>
          <CornerDown height={16} width={16} />
        </LeftContainer>
        <RightContainer>
          <Button onPress={() => navigation.navigate('NextDays')}>
            <NextDaysText>Next 7 days</NextDaysText>
          </Button>
          <ArrowRight height={18} width={18} />
        </RightContainer>
      </DaysContainer>
      <ListTemperature />
    </Container>
  );
};

export default Header;
