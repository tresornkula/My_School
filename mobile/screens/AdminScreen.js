// mobile/screens/AdminScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AdminScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Tableau de bord Administrateur" />
      <View style={styles.content}>
        <Text>Bienvenue, Administrateur !</Text>
        {/* Contenu spécifique à l'administrateur */}
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

export default AdminScreen;