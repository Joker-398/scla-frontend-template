import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';


export default function MainScreen({navigation}: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Card shop list</Text>
      <View style={styles.buttonWrapper}>
        <Button
          title="Check card prices"
          onPress={() => navigation.navigate('cards')}
        />
      </View>
      <Image source={{ uri: "https://lh3.googleusercontent.com/grass-cs/ACvplmNwtbiohsGe6zkYKId7BkOrwR8AluoOZ5z4v0FhDHeZVimI2WadTdTd11t_fHOJTu5hLJpvJVgIvBxvrjgUF2jceuiuviDC6sxuxxMIzxgxOgIggNyV81EjFmLvRxdCcdjOhA3Oig=s294-w294-h220-n-k-no" }} style={styles.Image} />
      <View style={styles.buttonWrapper}>
        <Button
          title="Cardifinity TCG"
        />
      </View>
      <Text style={styles.subtitle}>4.7 Stars</Text>
      <Image source={{ uri: "https://lh3.googleusercontent.com/grass-cs/ACvplmM7NnfTXBN8lBrUegE15oZCYIhGHnro-WeKbJuoWChzHY0jVEYgqsG0Z4UtS1Zh9ezOU080ZnVY8rdgTVW8zqL2gKkNTIbnEfHxldi4kAX6Yg7cYLl0Ei1UeBWZQcECWsunMWuUgKhfhWc5=s294-w294-h220-n-k-no" }} style={styles.Image} />
      <View style={styles.buttonWrapper}>
        <Button
          title="Table 1 Gaming"
        />
      </View>
       <Text style={styles.subtitle}>4.5 Stars</Text>
      <Image source={{ uri: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmkS2zTp64H1s9XpyQUiiRuB22xvJpRLp4zAskqrgjKyXx-5tK1QcA_OKco5LG0beOzBghON2Y7worFCiWg7hqVeIqa3U-4qLRc3jzcpVLiCgrCvxUPUWvlXNyDvJ-MhwxgtTPG=w184-h184-n-k-no" }} style={styles.Image} />
      <View style={styles.buttonWrapper}>
        <Button
          title="Phantom Cards & Collectibles"
        />
      </View>
       <Text style={styles.subtitle}>4.4 Stars</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
  },

  title:{
    fontSize:30,
    fontWeight:'bold'
  },

  subtitle:{
    fontSize:18,
    marginTop:10,
    backgroundColor:'#f7e863',
    paddingHorizontal:10,
    paddingVertical:5,
    borderRadius:5,
    color:'#0f0202',
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