// mobile/screens/StudentScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';

const StudentScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Tableau de bord Élève" />
      <View style={styles.content}>
        <Text>Bienvenue, Élève !</Text>
        {/* Contenu spécifique à l'élève */}
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

export default StudentScreen;