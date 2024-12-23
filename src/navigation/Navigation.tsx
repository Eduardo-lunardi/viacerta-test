import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HeaderStack } from 'src/components'
import * as Screens from 'src/screens'
import { TStackParamList } from 'src/types'

const Stack = createNativeStackNavigator<TStackParamList>()

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: (props) => <HeaderStack {...props} />,
          headerShadowVisible: false
        }}
      >
        <Stack.Screen name="Home" component={Screens.Home} options={{ headerShown: false }} />
        <Stack.Screen name="CreateAccount" component={Screens.CreateAccount} options={{ title: 'Criar conta' }} />
        <Stack.Screen name="Success" component={Screens.Success} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
