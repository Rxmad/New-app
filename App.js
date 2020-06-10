import React,{Component}  from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import login from './Compoenets/login';
import signup from './Compoenets/signup';
import {ProfileScreen,Stocks,Cash,Accounts,Ledger,Statistics,Signout} from "./Compoenets";
import {createDrawerNavigator} from "react-navigation-drawer";
const App=createStackNavigator(
  {
    login:{screen:login},
    signup:{screen:signup},
  }
);
const DrawerNavigator=createDrawerNavigator({
  ProfileScreen,Stocks,Cash,Accounts,Ledger,Statistics,Signout});
export default createAppContainer(DrawerNavigator);
 