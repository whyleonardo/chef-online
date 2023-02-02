import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from './src/screens/Home'
import { Login } from './src/screens/Login'
import { Details } from './src/screens/Details'

export type RootStackParamList = {
	Home: undefined
	Login: undefined
	Details: undefined
}

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export default function App() {
	return (
		<NavigationContainer>
			<Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
				<Screen name="Login" component={Login} />
				<Screen name="Home" component={Home} />
				<Screen name="Details" component={Details} />
			</Navigator>
		</NavigationContainer>
	)
}

