import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface ILoginScreenProps {
  press: () => void;
}

export const LoginScreen = ({press}: ILoginScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>Login screen</Text>
      <TouchableOpacity onPress={press}>
        <Text>log in</Text>
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
