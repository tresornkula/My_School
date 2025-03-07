// mobile/screens/TeacherScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TeacherScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Tableau de bord Enseignant" />
      <View style={styles.content}>
        <Text>Bienvenue, Enseignant !</Text>
        {/* Contenu spécifique à l'enseignant */}
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

export default TeacherScreen;