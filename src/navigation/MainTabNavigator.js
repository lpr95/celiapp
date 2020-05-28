import React from 'react';
import TabBarIcon from '../components/TabBarIcon';
import EvaluationScreen from '../screens/EvaluationScreen';
import HomeScreen from '../screens/HomeScreen';
import CalendarScreen from '../screens/CalendarScreen';
import DebugScreen from '../screens/DebugScreen';
import SymptomTrackerScreen from '../screens/SymptomTrackerScreen';
import FoodDiaryScreen from '../screens/FoodDiaryScreen';
import GIPScreen from '../screens/GIPScreen';
import EmoteTrackerScreen from '../screens/EmoteTrackerScreen';
import SymptomViewScreen from '../screens/SymptomViewScreen';
import FoodViewScreen from '../screens/FoodViewScreen';
import GIPViewScreen from '../screens/GIPViewScreen';
import EmoteViewScreen from '../screens/EmoteViewScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CameraScreen from '../screens/CameraScreen';
import GearScreen from '../screens/GearScreen';
import SymptomTrackerMoreSymptomsScreen from '../screens/SymptomTrackerMoreSymptomsScreen';
import SymptomTrackerAddNewScreen from '../screens/SymptomTrackerAddNewScreen';

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Tab } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';

const EvaluationStack = createStackNavigator()
function MyEvaluationStack() {
  return (
    <EvaluationStack.Navigator>
      <EvaluationStack.Screen name="Evaluation" component={EvaluationScreen} />
    </EvaluationStack.Navigator>
  )
}

const CalendarStack = createStackNavigator();
function MyCalendarStack() {
  return (
    <CalendarStack.Navigator>
    <CalendarStack.Screen name="Calendar" component={CalendarScreen} />
  </CalendarStack.Navigator>
  )
}


//const TabNavStack = createMaterialTopTabNavigator({
  const TabNavStack = createMaterialTopTabNavigator();

  function MyTabNavStack() {
    return (
      <TabNavStack.Navigator initialRouteName={CalendarScreen}
      tabBarOptions={{
        showLabel: false,
        showIcon: true,
        style: {
          backgroundColor: 'transparent',
        },
        indicatorStyle: {
          backgroundColor: 'lightblue',
        }
      }}>
        <TabNavStack.Screen 
          name="Evaluation" 
          component={MyEvaluationStack} // TODO: use EvaluationStackInstead? -> no!
          options={{ tabBarIcon: ({ focused }) => ( 
            <TabBarIcon 
              focused={focused} 
              name={'md-trending-up'} 
            /> 
          ), 
          }}/>
                
          <TabNavStack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ tabBarIcon: ({ focused }) => ( 
            <TabBarIcon 
              focused={focused} 
              name={'md-paw'}
            /> 
          ), 
          }}/>

          <TabNavStack.Screen 
          name="Calendar" 
          component={MyCalendarStack} // TODO
          options={{ tabBarIcon: ({ focused }) => ( 
            <TabBarIcon 
              focused={focused} 
              name={'md-calendar'}
            /> 
          ), 
          }}/>
      </TabNavStack.Navigator>
    )
  }

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name = "TabBar" component={MyTabNavStack} options={{headerShown: false}}  />
      <Stack.Screen name="AddSymptom" component={SymptomTrackerScreen} />
      <Stack.Screen name="MoreSymptoms" component={SymptomTrackerMoreSymptomsScreen} />
      <Stack.Screen name="AddNewSymptom" component={SymptomTrackerAddNewScreen} />
      <Stack.Screen name="ViewSymptom" component={SymptomViewScreen} />
      <Stack.Screen name="AddMeal" component={FoodDiaryScreen} />
      <Stack.Screen name="ViewMeal" component={FoodViewScreen} />
      <Stack.Screen name="AddEmote" component={EmoteTrackerScreen} />
      <Stack.Screen name="AddGIP" component={GIPScreen} />
      <Stack.Screen name="ViewGIP" component={GIPViewScreen} />
      <Stack.Screen name="ViewEmote" component={EmoteViewScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Debug" component={DebugScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />
      <Stack.Screen name="Gear" component={GearScreen} />
    </Stack.Navigator>

  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
} 

