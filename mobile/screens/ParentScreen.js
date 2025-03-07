// mobile/screens/ParentScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ParentScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Tableau de bord Parent" />
      <View style={styles.content}>
        <Text>Bienvenue, Parent !</Text>
        {/* Contenu spécifique au parent */}
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
});

export default ParentScreen;