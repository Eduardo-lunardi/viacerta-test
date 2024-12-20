import { LinkingOptions } from '@react-navigation/native'
import { StackParamList } from 'src/types'

const linkingConfig: LinkingOptions<StackParamList> = {
  prefixes: ['/'],
  config: {
    screens: {
      Home: 'Home',
      CPF: 'CPF',
      Name: 'Name',
      Email: 'Email',
      Password: 'Password',
      Success: 'Success'
    }
  }
}

export default linkingConfig
