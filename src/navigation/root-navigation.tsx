import React from 'react';
import {useSelector} from 'react-redux';
import DashboardStack from './dashboardStack';
import SigningStack from './signingStack';

const RootNavigation = () => {
  const {authorized} = useSelector((state: any) => state.authReducer);

  return !authorized ? <SigningStack /> : <DashboardStack />;
};

export default RootNavigation;
