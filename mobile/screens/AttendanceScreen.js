// mobile/screens/AttendanceScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getAttendance } from '../api/attendance';

const AttendanceScreen = () => {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    fetchAttendance();
  }, []);

  const fetchAttendance = async () => {
    try {
      const attendanceData = await getAttendance();
      setAttendance(attendanceData);
    } catch (error) {
      console.error('Erreur lors de la récupération des présences :', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Présences</Text>
      <FlatList
        data={attendance}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.attendanceItem}>
            <Text style={styles.attendanceText}>Date : {item.date}</Text>
            <Text style={styles.attendanceText}>Présent : {item.present ? 'Oui' : 'Non'}</Text>
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
  attendanceItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  attendanceText: {
    fontSize: 16,
  },
});

export default AttendanceScreen;