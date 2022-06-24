import React from 'react';
import {Provider} from 'react-redux';

import RootNavigation from './src/navigation/root-navigation';
import store from './src/store/reducers';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
