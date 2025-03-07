// mobile/screens/LoginScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import AuthForm from '../components/AuthForm';
import Footer from '../components/Footer';

const LoginScreen = ({ navigation }) => {
  const handleLogin = (email, password) => {
    // Logique de connexion
    console.log('Connexion avec:', email, password);
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <Header title="Connexion" />
      <AuthForm title="Se connecter" onSubmit={handleLogin} />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LoginScreen;