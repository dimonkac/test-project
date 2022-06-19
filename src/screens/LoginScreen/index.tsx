import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';

interface ILoginScreenProps {
  press: () => void;
}

export const LoginScreen = ({press}: ILoginScreenProps) => {
  const store = useSelector(state => state);
  const check = () => {
    console.log('sdfsdfsdf', store);
  };
  return (
    <View style={styles.container}>
      <Text>Login screen</Text>
      <TouchableOpacity onPress={press}>
        <Text>log in</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={check}>
        <Text>check</Text>
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
