import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import 'react-native-gesture-handler'; // <--- needs to be at the top of your file

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function EmptyScreen() {
  return <View />;
}

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button       
        title="Go to Profile"        
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        title="Go to Settings"        
        onPress={() => navigation.navigate('Settings')}
      />
   </View>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (focused) {
            iconName = 'ios-information-circle';
          } else {
            iconName = 'ios-information-circle-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      }}
    >
      <Tab.Screen name="HomeTabs" component={Home} />
      <Tab.Screen name="Feed" component={EmptyScreen} />
      <Tab.Screen name="Notifications" component={EmptyScreen} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          // headerShown: false
        }}
      >
        <Stack.Screen name="HomeMain" component={HomeTabs} />
        <Stack.Screen name="Profile" component={EmptyScreen} />
        <Stack.Screen name="Settings" component={EmptyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

