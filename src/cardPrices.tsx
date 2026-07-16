import React, { useState } from 'react';
import { Button, StyleSheet, View, Text, Image } from 'react-native';

export default function CardPricesScreen() {
  const [selectedCard, setSelectedCard] = useState<'default' | 'yugioh' | 'magic'>('default');

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Card prices</Text>

      {selectedCard === 'default' ? (
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAJoxJH37VS2TnewlbVvVYQ1tOBTdi2PsW8p4Qu7c_Vg&s=10',
          }}
          style={styles.image}
        />
      ) : selectedCard === 'yugioh' ? (
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB2DtvoatIb8RlIfq15e21SsGvhzyjejPzfhEKFjFfag&s=10',
          }}
          style={styles.image}
        />
      ) : (
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2OPktcLHfaD6qPbwOXHbA6lq8sFJJLM5A1YwhmsuuNg&s=10',
          }}
          style={styles.image}
        />
      )}

      <View style={styles.buttonWrapper}>
        <Button title="Show yu-gi-oh card prices" onPress={() => setSelectedCard('yugioh')} />
      </View>

      <View style={styles.buttonWrapper}>
        <Button title="Show magic the gathering card prices" onPress={() => setSelectedCard('magic')} />
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
  tittle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonWrapper: {
    borderWidth: 1,
    borderColor: '#1577e0',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f5f9ff',
    marginBottom: 10,
    width: '80%',
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
});