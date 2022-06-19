import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import RootNavigation from './src/navigation/root-navigation';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <RootNavigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#508cef80',
  },
});

export default App;
