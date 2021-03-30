import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';

import {tokens} from './tokens';
import Routes from './routes';
import {WeatherProvider} from './hooks/WeatherContext';

const App: React.FC = () => {
  return (
    <>
      <WeatherProvider>
        <ThemeProvider theme={tokens}>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </ThemeProvider>
      </WeatherProvider>
    </>
  );
};

export default App;
