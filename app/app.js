import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import RecipeDetailsScreen from '../screens/RecipeDetailsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator  
      screenOptions={{
          headerStyle: {
            height: 60,
            backgroundColor:'white',
          },
        }}>
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{
            headerTitleStyle: {
              fontSize: 20, 
          
            },
          }} />
        <Stack.Screen name="RecipeDetails" component={RecipeDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
