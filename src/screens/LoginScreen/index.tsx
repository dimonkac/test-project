import React, {useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {SimpleTextInput} from '../../components/input';
import {
  isLoad,
  setAuthorized,
  setEmail,
  setPassword,
} from '../../store/actions/authActions';

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const {email, password, load} = useSelector(
    (state: any) => state.authReducer,
  );
  const users = useSelector((state: any) => state.mockUserReducer);

  const validatePass = (pass: string): boolean => {
    return pass.length < 6;
  };
  const validateEmail = (e: string): boolean => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !re.test(String(e).toLowerCase());
  };
  const [emailErrors, setEmailErrors] = useState<boolean | null>(false);
  const [isValidPass, setValidPass] = useState<boolean | null>(false);

  const auth = () => {
    setEmailErrors(validateEmail(email));
    setValidPass(validatePass(password));
    dispatch(isLoad(true));
    const checkUser = users
      .filter((user: any) => user.email === email)
      .find((user: any) => user.password === password);
    if (checkUser) {
      setTimeout(() => {
        dispatch(isLoad(false));
        dispatch(setAuthorized());
      }, 1000);
    } else {
      Alert.alert('user not found');
      dispatch(isLoad(false));
    }
  };

  return (
    <View style={styles.container}>
      <Text>Login screen</Text>
      <TouchableOpacity>
        <Text>log in</Text>
      </TouchableOpacity>
      <SimpleTextInput
        value={email}
        onChangeText={text => {
          dispatch(setEmail(text));
        }}
        placeholder="E-mailadres"
      />
      {emailErrors && (
        <Text style={styles.errorText}>not correct e-mailadres</Text>
      )}
      <SimpleTextInput
        value={password}
        onChangeText={text => {
          dispatch(setPassword(text));
        }}
        placeholder="password"
        password
      />
      {isValidPass && (
        <Text style={styles.errorText}>
          password must be at least 6 characters
        </Text>
      )}
      {email && password ? (
        <TouchableOpacity
          onPress={auth}
          // disabled={!(!isValidPass && !emailErrors)}
          style={styles.loginButton}>
          {!load ? (
            <Text>Login</Text>
          ) : (
            <ActivityIndicator size="large" color="#00ff00" />
          )}
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '60%',
    marginBottom: 5,
  },
  passwordButton: {
    position: 'absolute',
    top: 0,
    right: 46,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    width: 120,
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  errorText: {
    color: 'red',
  },
});
