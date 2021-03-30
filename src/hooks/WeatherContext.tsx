import React, {createContext, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';

import api from '../services/api';

type WeatherState = {
  current?: CurrentState;
  hourly?: HourlyState;
  daily?: DailyState;
};

interface CurrentState {
  temp: number;
  feels_like: number;
  dt: number;
}

export type HourlyState = {
  temp?: number;
  feels_like?: number;
  dt?: number;
  sunrise?: number;
  sunset?: number;
  humidity?: number;
  wind_speed?: number;
  uvi?: number;
  pressure?: number;
};

interface DailyState {
  temp: {
    min: number;
    max: number;
  };
  feels_like: number;
  dt: number;
}

interface LocationState {
  lat: number;
  lon: number;
  city?: string;
}

interface WeatherContextData {
  current: CurrentState;
  hourly: HourlyState[];
  daily: DailyState[];
  location: LocationState;
  getPosition(): void;
  selectedDay: number;
  setSelectedIndex: (index: number) => void;
}

const WeatherContext = createContext<WeatherContextData>(
  {} as WeatherContextData,
);

const WeatherProvider: React.FC = ({children}) => {
  const [current, setCurrent] = useState<Promise<CurrentState | undefined>>(
    async () => {
      const userCurrent = await AsyncStorage.getItem('@user_weather_current');

      if (userCurrent) {
        let parsedcurrent = JSON.parse(userCurrent);
        return parsedcurrent;
      }

      return {} as CurrentState;
    },
  );
  const [hourly, setHourly] = useState<Promise<HourlyState | undefined>>(
    async () => {
      const userHourly = await AsyncStorage.getItem('@user_weather_hourly');

      if (userHourly) {
        return JSON.parse(userHourly);
      }

      return {} as HourlyState;
    },
  );
  const [daily, setDaily] = useState<Promise<DailyState | undefined>>(
    async () => {
      const userDaily = await AsyncStorage.getItem('@user_weather_daily');

      if (userDaily) {
        return JSON.parse(userDaily);
      }

      return {} as DailyState;
    },
  );
  const [location, setLocation] = useState<Promise<LocationState>>(async () => {
    const userLocation = await AsyncStorage.getItem('@user_location');

    if (userLocation) {
      return JSON.parse(userLocation);
    }

    return {} as LocationState;
  });
  const [selectedDay, setSelectedDay] = useState(0);

  var key = '0321255884cc309448bf90b02388138b';
  const getData = async (latitude: number, longitude: number) => {
    await api
      .get(
        `/onecall?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`,
      )
      .then(async response => {
        const data: WeatherState = response.data;
        await AsyncStorage.setItem(
          '@user_weather_current',
          JSON.stringify(data.current),
        );
        await AsyncStorage.setItem(
          '@user_weather_hourly',
          JSON.stringify(data.hourly),
        );
        await AsyncStorage.setItem(
          '@user_weather_daily',
          JSON.stringify(data.daily),
        );
        setCurrent(data.current);
        setHourly(data.hourly);
        setDaily(data.daily);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const getPosition = () => {
    Geolocation.getCurrentPosition(
      async position => {
        Geocoder.init('AIzaSyDEiU7hXqzcRktpy7YU4gTtiJ55dwycB20');
        Geocoder.from(position.coords.latitude, position.coords.longitude)
          .then(async json => {
            var addressComponent = json.results[0];
            var location: LocationState = {
              lat: position.coords.latitude,
              lon: position.coords.longitude,
              city:
                addressComponent.address_components[1].long_name +
                ', ' +
                addressComponent.address_components[2].short_name,
            };
            await AsyncStorage.setItem(
              '@user_location',
              JSON.stringify(location),
            );
            setLocation(location);
            await getData(position.coords.latitude, position.coords.longitude);
          })
          .catch(error => console.warn(error));
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  const setSelectedIndex = (index: number) => {
    setSelectedDay(index);
  };

  return (
    <WeatherContext.Provider
      value={{
        current,
        hourly,
        daily,
        location,
        getPosition,
        setSelectedIndex,
        selectedDay,
      }}>
      {children}
    </WeatherContext.Provider>
  );
};

export {WeatherContext, WeatherProvider};
