import React from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView } from 'react-native';

export default function MainScreen({ navigation }: any) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.container2}>
          <Text style={styles.title}>Card shop list</Text>

         <View style={styles.buttonWrapper}>
          <Button
            title="Check card prices"
            onPress={() => navigation.navigate('CardPrices')}
          />
         </View>
        </View>

        <Image
          source={{
            uri: 'https://lh3.googleusercontent.com/grass-cs/ACvplmNwtbiohsGe6zkYKId7BkOrwR8AluoOZ5z4v0FhDHeZVimI2WadTdTd11t_fHOJTu5hLJpvJVgIvBxvrjgUF2jceuiuviDC6sxuxxMIzxgxOgIggNyV81EjFmLvRxdCcdjOhA3Oig=s294-w294-h220-n-k-no',
          }}
          style={styles.Image}
        />

        <View style={styles.buttonWrapper}>
          <Button
            title="Cardifinity TCG"
            onPress={() => navigation.navigate('shops', { shop: 'cardifinity' })}
          />
        </View>

        <Text style={styles.subtitle}>4.7 Stars</Text>

        <Image
          source={{
            uri: 'https://lh3.googleusercontent.com/grass-cs/ACvplmM7NnfTXBN8lBrUegE15oZCYIhGHnro-WeKbJuoWChzHY0jVEYgqsG0Z4UtS1Zh9ezOU080ZnVY8rdgTVW8zqL2gKkNTIbnEfHxldi4kAX6Yg7cYLl0Ei1UeBWZQcECWsunMWuUgKhfhWc5=s294-w294-h220-n-k-no',
          }}
          style={styles.Image}
        />

        <View style={styles.buttonWrapper}>
          <Button
            title="Table 1 Gaming"
            onPress={() => navigation.navigate('shops', { shop: 'table1' })}
          />
        </View>

        <Text style={styles.subtitle}>4.5 Stars</Text>

        <Image
          source={{
            uri: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmkS2zTp64H1s9XpyQUiiRuB22xvJpRLp4zAskqrgjKyXx-5tK1QcA_OKco5LG0beOzBghON2Y7worFCiWg7hqVeIqa3U-4qLRc3jzcpVLiCgrCvxUPUWvlXNyDvJ-MhwxgtTPG=w184-h184-n-k-no',
          }}
          style={styles.Image}
        />

        <View style={styles.buttonWrapper}>
          <Button
            title="Phantom Cards & Collectibles"
            onPress={() => navigation.navigate('shops', { shop: 'phantom' })}
          />
        </View>

        <Text style={styles.subtitle}>4.4 Stars</Text>

        <View style={styles.container3}>

        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6f1f1',
  },
  container2: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#100dba',
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  container3: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#100dba',
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginBottom: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#f3f0f0',
  },
  subtitle: {
    fontSize: 18,
    marginTop: 10,
    backgroundColor: '#f7e863',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    color: '#0f0202',
  },
  Image: {
    width: 100,
    height: 100,
    marginTop: 20,
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
  },
});