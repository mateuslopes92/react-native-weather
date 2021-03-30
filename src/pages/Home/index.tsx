import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';

import {tokens} from '../../tokens';
import Header from '../../components/Header';
import WeatherTimeInfo from '../../components/WeatherTimeInfo';
import {Container} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <SafeAreaView edges={['top']} />
      <StatusBar
        barStyle="light-content"
        backgroundColor={tokens.colors.colorPrimary}
      />
      <Header />
      <WeatherTimeInfo />
    </Container>
  );
};

export default Home;
