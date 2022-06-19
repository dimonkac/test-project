import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface IHomeScreenProps {
  press: () => void;
}

export const HomeScreen = ({press}: IHomeScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity onPress={press}>
        <Text>log out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
