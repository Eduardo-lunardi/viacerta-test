import successImage from 'assets/images/success.png'
import { Image, StyleSheet } from 'react-native'
import { Button, Container, Typography } from 'src/components'
import { TStackScreenProps } from 'src/types'

export default function Success({ navigation }: TStackScreenProps<'Success'>) {
  return (
    <Container style={{ gap: 16 }}>
      <Image style={sytles.image} source={successImage} />
      <Typography variant="Heading" color="green">
        TUDO CERTO!
      </Typography>
      <Typography variant="Body" color="blue">
        Seu cadastro está confirmado {'\n'}e tudo pronto para você começar!
      </Typography>
      <Button
        text="Voltar para o início"
        onPress={() => navigation.navigate('Home')}
      />
    </Container>
  )
}

const sytles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
    height: '70%',
    width: '70%'
  }
})
