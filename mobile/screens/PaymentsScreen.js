// mobile/screens/PaymentsScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getPayments } from '../api/payments';

const PaymentsScreen = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    try {
      const paymentsData = await getPayments();
      setPayments(paymentsData);
    } catch (error) {
      console.error('Erreur lors de la récupération des paiements :', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Paiements</Text>
      <FlatList
        data={payments}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.paymentItem}>
            <Text style={styles.paymentText}>Montant : {item.amount}</Text>
            <Text style={styles.paymentText}>Date : {item.date}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  paymentItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  paymentText: {
    fontSize: 16,
  },
});

export default PaymentsScreen;