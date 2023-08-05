import { StatusBar } from 'expo-status-bar';
import { StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategoriesScreen from './screens/CategoriesScreen';



const stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name='MealsCategories' component={CategoriesScreen}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
