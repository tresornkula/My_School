// mobile/screens/ResourcesScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getResources } from '../api/resources';
import { Linking } from 'react-native';

const ResourcesScreen = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      const resourcesData = await getResources();
      setResources(resourcesData);
    } catch (error) {
      console.error('Erreur lors de la récupération des ressources :', error);
    }
  };

  const openResource = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ressources</Text>
      <FlatList
        data={resources}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.resourceItem}>
            <Text style={styles.resourceText} onPress={() => openResource(item.url)}>
              {item.title}
            </Text>
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
  resourceItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  resourceText: {
    fontSize: 16,
    color: 'blue',
  },
});

export default ResourcesScreen;