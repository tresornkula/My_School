import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import DashboardScreen from './screens/DashboardScreen';
import AdminScreen from './screens/AdminScreen';
import TeacherScreen from './screens/TeacherScreen';
import StudentScreen from './screens/StudentScreen';
import ParentScreen from './screens/ParentScreen';
import MessagesScreen from './screens/MessagesScreen';
import PaymentsScreen from './screens/PaymentsScreen';
import AttendanceScreen from './screens/AttendanceScreen';
import GradesScreen from './screens/GradesScreen';
import AssignmentsScreen from './screens/AssignmentsScreen';
import ResourcesScreen from './screens/ResourcesScreen';
import EventsScreen from './screens/EventsScreen';
import { init } from './database/db';

const Stack = createNativeStackNavigator();

export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false);

  useEffect(() => {
    init()
      .then(() => {
        setDbInitialized(true);
      })
      .catch((err) => {
        console.log('Database initialization failed', err);
      });
  }, []);

  if (!dbInitialized) {
    return null; // or a loading indicator
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Admin" component={AdminScreen} />
        <Stack.Screen name="Teacher" component={TeacherScreen} />
        <Stack.Screen name="Student" component={StudentScreen} />
        <Stack.Screen name="Parent" component={ParentScreen} />
        <Stack.Screen name="Messages" component={MessagesScreen} />
        <Stack.Screen name="Payments" component={PaymentsScreen} />
        <Stack.Screen name="Attendance" component={AttendanceScreen} />
        <Stack.Screen name="Grades" component={GradesScreen} />
        <Stack.Screen name="Assignments" component={AssignmentsScreen} />
        <Stack.Screen name="Resources" component={ResourcesScreen} />
        <Stack.Screen name="Events" component={EventsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}