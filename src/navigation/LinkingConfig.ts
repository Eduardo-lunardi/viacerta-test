import { LinkingOptions } from '@react-navigation/native'
import { TStackParamList } from 'src/types'

const linkingConfig: LinkingOptions<TStackParamList> = {
  prefixes: ['/'],
  config: {
    screens: {
      Home: 'Home',
      CreateAccount: 'CreateAccount',
      Success: 'Success'
    }
  }
}

export default linkingConfig
