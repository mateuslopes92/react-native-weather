import {useNavigation} from '@react-navigation/core';
import React, {useContext, useEffect} from 'react';
import { Animated } from 'react-native';

import {WeatherContext} from '../../../hooks/WeatherContext';
import Loading from '../../atoms/Loading';
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
  const opacityText = new Animated.Value(0);
  const opacityTemperature = new Animated.Value(0);
  const translate = new Animated.Value(-400);
  const {current, location, getPosition, setSelectedIndex, loading} = useContext(
    WeatherContext,
  );

  const navigation = useNavigation();

  useEffect(() => {
    Animated.timing(opacityText, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true
    }).start();
    getPosition();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!loading) {
      Animated.timing(opacityTemperature, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true
      }).start();
      Animated.timing(translate, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true
      }).start();
    }
  }, [loading])

  const getDataFormated = (date: number) => {
    var newDate = new Date(date * 1000);
    newDate.toUTCString();
    return String(newDate).substring(0, 11);
  };

  return (
    <Container>
      <HeaderContainer
        testID="header-container"
        style={{
          transform: [
            {
              translateX: translate
            }
          ]
        }}>
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
          <DateText style={{ opacity: opacityTemperature }}>Today</DateText> 
          <DateFull>
            { loading ? 'Loading...' : getDataFormated(current?.dt) }
          </DateFull> 
        </DateContainer> 
        <TemperatureContainer>
          {loading ? (
            <Loading />
          ) : (
            <>
              <TemperatureText style={{ opacity: opacityTemperature }}>
                {current?.temp?.toFixed(0)}
                <TemperatureMeasure>°C</TemperatureMeasure>
              </TemperatureText>
              <TemperatureFeels>
                Feels like {current?.feels_like?.toFixed(0)}°C
              </TemperatureFeels>
            </>
          )}
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
