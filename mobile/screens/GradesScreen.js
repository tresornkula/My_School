// mobile/screens/GradesScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getGrades } from '../api/grades';

const GradesScreen = () => {
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    fetchGrades();
  }, []);

  const fetchGrades = async () => {
    try {
      const gradesData = await getGrades();
      setGrades(gradesData);
    } catch (error) {
      console.error('Erreur lors de la récupération des notes :', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notes</Text>
      <FlatList
        data={grades}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.gradeItem}>
            <Text style={styles.gradeText}>Cours : {item.course.name}</Text>
            <Text style={styles.gradeText}>Note : {item.grade}</Text>
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
  gradeItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  gradeText: {
    fontSize: 16,
  },
});

export default GradesScreen;