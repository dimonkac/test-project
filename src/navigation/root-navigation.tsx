import React, {useState} from 'react';
import {HomeScreen} from '../screens/HomeScreen';
import {LoginScreen} from '../screens/LoginScreen';

const RootNavigation = () => {
  const [auth, setAuth] = useState<boolean>(false);
  const changeAuth = () => setAuth(!auth);
  return auth ? (
    <LoginScreen press={changeAuth} />
  ) : (
    <HomeScreen press={changeAuth} />
  );
};

export default RootNavigation;
