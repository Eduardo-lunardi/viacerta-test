import Logo from 'assets/images/logo.svg'
import { Dimensions, StyleSheet, View } from 'react-native'
import { Shadow } from 'react-native-shadow-2'
import { Button, Container } from 'src/components'
import { theme } from 'src/constants'
import { StackScreenProps } from 'src/types'

export default function Home({ navigation }: StackScreenProps<'Home'>) {
  const screenWidth = Dimensions.get('window').width

  return (
    <Container>
      <View style={styles.logoContainer}>
        <Shadow
          distance={5}
          startColor={theme.colors.black100}
          endColor={theme.colors.white}
          offset={[0, 6]}
        >
          <View style={[styles.logoWrapper, { width: screenWidth - 64 }]}>
            <Logo />
          </View>
        </Shadow>
      </View>
      <Button onPress={() => navigation.navigate('CPF')} text="CRIAR CONTA" />
    </Container>
  )
}

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoWrapper: {
    borderRadius: 50,
    backgroundColor: theme.colors.white,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10
  }
})
