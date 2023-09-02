import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/title/';
import Main from './src/components/main';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './src/components/HomeScreen'
import Home2 from './src/components/flatlist';
import Form from './src/components/form';
import CounterScreen from './src/components/contador/counterScreen';
import ColorList from './src/components/colorlist';
import LayoutScreen from './src/components/layout';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Home2" component={Home2} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="CounterScreen" component={CounterScreen} />
        <Stack.Screen name="ColorList" component={ColorList} />
        <Stack.Screen name="Layout" component={LayoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

