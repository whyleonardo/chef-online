import { View, Text, Button } from "react-native"
import { useNavigation } from '@react-navigation/native'

export const Details = () => {
	const navigation = useNavigation()
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Details</Text>
			<Button
				title="Go to Home"
				onPress={() => navigation.navigate("Home")}
			/>
		</View>
	)
}
