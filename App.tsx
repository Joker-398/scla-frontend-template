import React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/pages/loginScreen';
import MainScreen from './src/pages/Main';
import CardPricesScreen from './src/cardPrices';
import ShopsScreen from './src/shops';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Welcome to our app!</Text>
      <View style={styles.buttonWrapper}>
      <Button
      title="Go to Login" 
      onPress={() => navigation.navigate('Login')}
       />
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />

        <Stack.Screen
          name="Main"
          component={MainScreen}
        />

        <Stack.Screen
          name="shops"
          component={ShopsScreen}
        />
        <Stack.Screen
          name="CardPrices"
          component={CardPricesScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  tittle: {
    fontSize:30,
    fontWeight:'bold',
  },
  buttonWrapper: {
    borderWidth: 1,
    borderColor: '#1577e0',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f5f9ff',
    marginBottom: 10,
    marginTop: 50,
  },
});