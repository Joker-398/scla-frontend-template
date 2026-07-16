import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function ShopsScreen({ route }: any) {
  const shop = route?.params?.shop || 'cardPrices';

  const shopDetails: Record<string, { title: string; image: string; description: string }> = {
    cardifinity: {
      title: 'Cardifinity TCG',
      image: 'https://lh3.googleusercontent.com/grass-cs/ACvplmNwtbiohsGe6zkYKId7BkOrwR8AluoOZ5z4v0FhDHeZVimI2WadTdTd11t_fHOJTu5hLJpvJVgIvBxvrjgUF2jceuiuviDC6sxuxxMIzxgxOgIggNyV81EjFmLvRxdCcdjOhA3Oig=s294-w294-h220-n-k-no',
      description: 'Browse card inventory and special deals.',
    },
    table1: {
      title: 'Table 1 Gaming',
      image: 'https://lh3.googleusercontent.com/grass-cs/ACvplmM7NnfTXBN8lBrUegE15oZCYIhGHnro-WeKbJuoWChzHY0jVEYgqsG0Z4UtS1Zh9ezOU080ZnVY8rdgTVW8zqL2gKkNTIbnEfHxldi4kAX6Yg7cYLl0Ei1UeBWZQcECWsunMWuUgKhfhWc5=s294-w294-h220-n-k-no',
      description: 'A great spot for table-top and trading cards.',
    },
    phantom: {
      title: 'Phantom Cards & Collectibles',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmkS2zTp64H1s9XpyQUiiRuB22xvJpRLp4zAskqrgjKyXx-5tK1QcA_OKco5LG0beOzBghON2Y7worFCiWg7hqVeIqa3U-4qLRc3jzcpVLiCgrCvxUPUWvlXNyDvJ-MhwxgtTPG=w184-h184-n-k-no',
      description: 'Discover premium collectibles and rare cards.',
    },
  };

  const selectedShop = shopDetails[shop] || shopDetails.cardPrices;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{selectedShop.title}</Text>
      <Image source={{ uri: selectedShop.image }} style={styles.image} />
      <Text style={styles.description}>{selectedShop.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 12,
    borderRadius: 10,
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
    color: '#444',
  },
  
});

