import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type StackParamList = {
  Home: undefined
  CPF: undefined
  Name: undefined
  Email: undefined
  Password: undefined
  Success: undefined
}

export type StackScreenProps<Screen extends keyof StackParamList> =
  NativeStackScreenProps<StackParamList, Screen>
