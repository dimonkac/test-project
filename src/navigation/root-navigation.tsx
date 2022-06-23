import React from 'react';
import {useSelector} from 'react-redux';
import {HomeScreen} from '../screens/HomeScreen';
import {LoginScreen} from '../screens/LoginScreen';

const RootNavigation = () => {
  const {authorized} = useSelector((state: any) => state.authReducer);

  return !authorized ? <LoginScreen /> : <HomeScreen />;
};

export default RootNavigation;
