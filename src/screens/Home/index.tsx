import { View, Text, Button } from "react-native"
import { useNavigation } from '@react-navigation/native'

export const Home = () => {
	const navigation = useNavigation()
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
			<Button
				title="Go to Details"
				onPress={() => navigation.navigate("Details")}
			/>
		</View>
	)
}
