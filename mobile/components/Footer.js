// mobile/components/Footer.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>&copy; 2025 My School BOBOTO</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#333',
    padding: 15,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});

export default Footer;