import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from './src/screens/Home'
import { Login } from './src/screens/Login'
import { Details } from './src/screens/Details'
import { StatusBar } from 'expo-status-bar'
import FontAwesome from '@expo/vector-icons/FontAwesome'

export type RootStackParamList = {
	Home: undefined
	Login: undefined
	Details: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const Tab = createBottomTabNavigator();



export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>
				<Stack.Screen name='Home' component={HomeTabs} />
				<Stack.Screen name='Login' component={Login} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}



const HomeTabs = () => {
	return (
		<Tab.Navigator screenOptions={({ route }) => ({
			headerShown: false,
			tabBarIcon: ({ focused, color, size }) => {
				let iconName: any

				if (route.name === 'Home') {
					iconName = 'home'
				} else if (route.name === 'Details') {
					iconName = 'gear';
				}

				// You can return any component that you like here!
				return <FontAwesome name={iconName} size={size} color={color} />;
			},
			tabBarActiveTintColor: 'tomato',
			tabBarInactiveTintColor: 'gray',
		})}>
			<Tab.Screen name='Home' component={Home} />
			<Tab.Screen name='Details' component={Details} />
		</Tab.Navigator>
	)
}
