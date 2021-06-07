import React, {Component} from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Pokemons from './src/components/Pokemons';
import Details from './src/components/Details';

const appNavigator = createStackNavigator(
  {
    Home: {
      screen: Pokemons,
    },
    Details: {
      screen: Details,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(appNavigator);

export default function App() {
  return (
    <AppContainer />
  )
}
