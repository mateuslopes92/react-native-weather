import React, {useState, useContext, useEffect} from 'react';
import { Animated } from 'react-native';

import {WeatherContext} from '../../../hooks/WeatherContext';
import {
  Container,
  ListTemperatureHours,
  IconRain,
  IconThunderstorm,
  IconDrizzle,
  IconSnow,
  IconAtmosphere,
  IconClear,
  IconClouds,
  ListItemContainer,
  ItemTime,
  TemperatureContainer,
  TemperatureText,
} from './styles';

const ListTemperature: React.FC = () => {
  const {hourly, setSelectedIndex, selectedDay, loading} = useContext(WeatherContext);
  const [selected, setSelected] = useState(selectedDay);

  useEffect(() => {
    setSelectedIndex(selected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  const onSelect = item => {
    let itemSelected = hourly.findIndex(i => item.dt === i.dt);
    setSelected(itemSelected);
  };

  const getHour = (itemDate: number) => {
    var date = new Date(itemDate * 1000);
    var hour = date.getHours();

    var time = hour >= 12 ? 'pm' : 'am';
    return hour + time;
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

  const renderItem = ({ item }) => {
    return (
      <ListItemContainer key={String(item.dt)}>
        <ItemTime selected={item === hourly[selectedDay]}>
          {getHour(item.dt)}
        </ItemTime>
        <TemperatureContainer
          selected={item === hourly[selectedDay]}
          onPress={() => onSelect(item)}>
          {getIcon(item.weather[0].main)}
          <TemperatureText>{item.temp.toFixed(0)}°C</TemperatureText>
        </TemperatureContainer>
      </ListItemContainer>
    );
  };

  return (
    <Container>
      <ListTemperatureHours
        horizontal
        data={hourly}
        renderItem={renderItem.bind(this)}
        keyExtractor={item => String(item.dt)}
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
};

export default ListTemperature;
