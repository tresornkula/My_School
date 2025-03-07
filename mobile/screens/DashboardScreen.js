// mobile/screens/DashboardScreen.js
import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import DashboardCard from '../components/DashboardCard';
import Footer from '../components/Footer';

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Tableau de bord" />
      <ScrollView style={styles.content}>
        <DashboardCard title="Cours à venir" content="Mathématiques à 10h" />
        <DashboardCard title="Derniers devoirs" content="Exercices de physique" />
        <DashboardCard title="Notes récentes" content="Anglais: 18/20" />
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 10,
  },
});

export default DashboardScreen;