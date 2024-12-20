import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as Screens from 'src/screens'
import { StackParamList } from 'src/types'

const Stack = createNativeStackNavigator<StackParamList>()

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Screens.Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="CPF" component={Screens.CPF} />
        <Stack.Screen name="Name" component={Screens.Name} />
        <Stack.Screen name="Email" component={Screens.Email} />
        <Stack.Screen name="Password" component={Screens.Password} />
        <Stack.Screen name="Success" component={Screens.Success} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
