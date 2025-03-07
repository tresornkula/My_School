// mobile/components/PlanItem.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlanItem = ({ plan }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{plan.title}</Text>
      <Text style={styles.details}>{plan.details}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 8,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    color: '#666',
  },
});

export default PlanItem;