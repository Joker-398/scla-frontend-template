import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function LoginScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Page</Text>
      <View style={styles.buttonWrapper}>
        <Button
            title="Login with Google"
        />
      </View>


      <View style={styles.buttonWrapper}>
        <Button
          title="Go to Main page"
          onPress={() => navigation.navigate('Main')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  buttonWrapper: {
    borderWidth: 1,
    borderColor: '#1577e0',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f5f9ff',
    marginBottom: 16,
  },
});