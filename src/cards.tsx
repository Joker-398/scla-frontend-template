import React from 'react';
import { Button, StyleSheet, View, Text, Image } from 'react-native';

export default function CardPricesScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.tittle}> Card prices</Text>
            <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRegpiKtSm23MKhejvU6f_wUxEj_eZv9DU9TZhURFk0Aw&s" }} style={styles.Image} />
            
        </View>
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
    marginBottom: 20,
  },
    Image: {
    width: 100,
    height: 100,
    marginTop: 10,
    marginBottom: 10,
  },
});