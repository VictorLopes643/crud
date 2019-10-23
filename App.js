import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { crateAppContainer, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './src/pages/LoginScreen';


const AppNavigator = createStackNavigator({

  'Login': {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Bem Vindo!',
    }
  }, 
},
  {
    defaultNavigationOptions: {
      title: "Series",
      headerStyle:{
        backgroundColor: "#6ca2f7",
        borderBottomWidth:1,
        borderBottomColor: "#c5c5c5",
        
      },
      headerTitleStyle:{
        color: "white",
        fontSize: 30
      }
    }
  }

);

const AppConteiner = createAppContainer(AppNavigator);

export default AppConteiner;
