// mobile/screens/AssignmentsScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getAssignments } from '../api/assignments';

const AssignmentsScreen = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const assignmentsData = await getAssignments();
      setAssignments(assignmentsData);
    } catch (error) {
      console.error('Erreur lors de la récupération des devoirs :', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Devoirs</Text>
      <FlatList
        data={assignments}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.assignmentItem}>
            <Text style={styles.assignmentText}>Titre : {item.title}</Text>
            <Text style={styles.assignmentText}>Date limite : {item.dueDate}</Text>
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
  assignmentItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  assignmentText: {
    fontSize: 16,
  },
});

export default AssignmentsScreen;