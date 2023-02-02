import { View, ImageBackground, Image, TextInput, Text, TouchableOpacity } from "react-native"
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { styled } from 'nativewind'
import { useNavigation } from '@react-navigation/native'

const FacebookIcon = styled(FontAwesome)

const imageLogo = '../../assets/brand-login.png'
const backgroundImage = '../../assets/bg-login.png'

export const Login = () => {
	const navigation = useNavigation()
	return (
		<View className='flex-1 bg-blue-200'>
			<ImageBackground source={require(backgroundImage)} className='flex-1 items-center justify-center' resizeMode="cover">
				<View className='items-center'>
					<Image source={require(imageLogo)} className='text-green-500 mb-7' />
					<TextInput className="bg-white mb-4 px-5 py-3 w-80 rounded-lg" placeholder="Email" />
					<TextInput className="bg-white mb-12 px-5 py-3 w-80 rounded-lg" placeholder="Senha" />

					<TouchableOpacity className=" bg-brand-red mb-4 px-5 py-4 w-80 rounded-lg">
						<View >
							<Text className="text-white font-bold text-center" >
								Criar conta
							</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity className=" bg-brand-blue px-5 py-4 w-80 rounded-lg">
						<View className='flex-row items-center justify-center'>
							<FacebookIcon name='facebook' color='white' size={20} className='mx-2' />
							<Text className="text-white font-bold text-center">
								Entrar com o Facebook
							</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity className="mb-4 px-5 py-4 w-80 rounded-lg">
						<View className='flex-row items-center justify-center'>
							<Text className="text-white font-bold text-center underline">
								Entrar sem efetuar login
							</Text>
						</View>
					</TouchableOpacity>

				</View>
			</ImageBackground >
		</View >
	)
}
