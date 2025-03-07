// mobile/screens/SignupScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import AuthForm from '../components/AuthForm';
import Footer from '../components/Footer';

const SignupScreen = ({ navigation }) => {
  const handleSignup = (email, password) => {
    // Logique d'inscription
    console.log('Inscription avec:', email, password);
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <Header title="Inscription" />
      <AuthForm title="S'inscrire" onSubmit={handleSignup} />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SignupScreen;