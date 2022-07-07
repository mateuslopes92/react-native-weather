import React, {useContext, useEffect} from 'react';
import { Animated } from 'react-native';

import {WeatherContext, HourlyState} from '../../../hooks/WeatherContext';
import {Container, Row, Column, Title, InfoText} from './styles';

const Wheater: React.FC = () => {
  const translate = new Animated.Value(-500);
  const {hourly, selectedDay, loading} = useContext(WeatherContext);
  const hourData: HourlyState = hourly[selectedDay];
  const columnAnimationStyle = {
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

  const getHour = (itemDate: number | undefined) => {
    const dateParam = itemDate === undefined ? 0 : itemDate;
    var date = new Date(dateParam * 1000);
    var hour = date.getHours();
    var minutes = date.getMinutes();

    var time = hour >= 12 ? `:${minutes}pm` : `:${minutes}am`;
    return hour + time;
  };

  return (
    <Container>
      <Row>
        <Column style={columnAnimationStyle}>
          <Title>SUNRISE</Title>
          <InfoText>{getHour(hourData?.sunrise)}</InfoText>
        </Column>
        <Column style={columnAnimationStyle}>
          <Title>SUNSET</Title>
          <InfoText>{getHour(hourData?.sunset)}</InfoText>
        </Column>
      </Row>
      <Row>
        <Column style={columnAnimationStyle}>
          <Title>HUMIDITY</Title>
          <InfoText>{hourData?.humidity}%</InfoText>
        </Column>
        <Column style={columnAnimationStyle}>
          <Title>WIND</Title>
          <InfoText>{hourData?.wind_speed}km/h</InfoText>
        </Column>
      </Row>
      <Row>
        <Column style={columnAnimationStyle}>
          <Title>PRESSURE</Title>
          <InfoText>{hourData?.pressure} hPa</InfoText>
        </Column>
        <Column style={columnAnimationStyle}>
          <Title>UV INDEX</Title>
          <InfoText>{hourData?.uvi} of 10</InfoText>
        </Column>
      </Row>
    </Container>
  );
};

export default Wheater;
