import React, {useContext} from 'react';

import {HourlyState, WeatherContext} from '../../hooks/WeatherContext';
import {Container, Row, Column, Title, InfoText} from './styles';

const Wheater: React.FC = () => {
  const {hourly, selectedDay} = useContext(WeatherContext);
  const hourData: HourlyState = hourly[selectedDay];

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
        <Column>
          <Title>SUNRISE</Title>
          <InfoText>{getHour(hourData?.sunrise)}</InfoText>
        </Column>
        <Column>
          <Title>SUNSET</Title>
          <InfoText>{getHour(hourData?.sunset)}</InfoText>
        </Column>
      </Row>
      <Row>
        <Column>
          <Title>HUMIDITY</Title>
          <InfoText>{hourData?.humidity}%</InfoText>
        </Column>
        <Column>
          <Title>WIND</Title>
          <InfoText>{hourData?.wind_speed}km/h</InfoText>
        </Column>
      </Row>
      <Row>
        <Column>
          <Title>PRESSURE</Title>
          <InfoText>{hourData?.pressure} hPa</InfoText>
        </Column>
        <Column>
          <Title>UV INDEX</Title>
          <InfoText>{hourData?.uvi} of 10</InfoText>
        </Column>
      </Row>
    </Container>
  );
};

export default Wheater;
