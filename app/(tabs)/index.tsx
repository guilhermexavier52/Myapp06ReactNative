import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function QuotePanel() {
  return (
    <View style={styles.panel}>
      <Text style={styles.quoteText}>
        "A única maneira de fazer um excelente trabalho é amar o que você faz."
      </Text>
      <Image
        source={{ uri: 'https://basicamente.com/cdn/shop/articles/basicamente_2023_SteveJobs_blog_01.png?v=1686446540' }}
        style={styles.authorImage}
      />
      <Text style={styles.authorName}>- Steve Jobs</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    backgroundColor: '#66BCDA',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
  },
  quoteText: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#6D23EC',
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  authorImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 10,
  },
  authorName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#81230C',
    fontStyle: 'italic',
  },
});
