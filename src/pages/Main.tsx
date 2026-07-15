import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Card shop list</Text>
      <Image source={{ uri: "https://lh3.googleusercontent.com/grass-cs/ACvplmNwtbiohsGe6zkYKId7BkOrwR8AluoOZ5z4v0FhDHeZVimI2WadTdTd11t_fHOJTu5hLJpvJVgIvBxvrjgUF2jceuiuviDC6sxuxxMIzxgxOgIggNyV81EjFmLvRxdCcdjOhA3Oig=s294-w294-h220-n-k-no" }} style={styles.Image} />
      <Text style={styles.subtitle}>Cardfinity TCG</Text>
      <Image source={{ uri: "https://lh3.googleusercontent.com/grass-cs/ACvplmM7NnfTXBN8lBrUegE15oZCYIhGHnro-WeKbJuoWChzHY0jVEYgqsG0Z4UtS1Zh9ezOU080ZnVY8rdgTVW8zqL2gKkNTIbnEfHxldi4kAX6Yg7cYLl0Ei1UeBWZQcECWsunMWuUgKhfhWc5=s294-w294-h220-n-k-no" }} style={styles.Image} />
      <Text style={styles.subtitle}>Table 1 Gaming</Text>
      <Image source={{ uri: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmkS2zTp64H1s9XpyQUiiRuB22xvJpRLp4zAskqrgjKyXx-5tK1QcA_OKco5LG0beOzBghON2Y7worFCiWg7hqVeIqa3U-4qLRc3jzcpVLiCgrCvxUPUWvlXNyDvJ-MhwxgtTPG=w184-h184-n-k-no" }} style={styles.Image} />
      <Text style={styles.subtitle}>Phantom Cards & Collectibles</Text>
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
    marginTop:10
  },
  Image: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
});