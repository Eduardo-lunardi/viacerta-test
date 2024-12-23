import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type TStackParamList = {
  Home: undefined
  CreateAccount: undefined
  Success: undefined
}

export type TStackScreenProps<Screen extends keyof TStackParamList> =
  NativeStackScreenProps<TStackParamList, Screen>
