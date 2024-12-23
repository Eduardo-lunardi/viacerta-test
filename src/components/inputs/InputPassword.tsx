import React from 'react'
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputSubmitEditingEventData,
  TouchableOpacity,
  View
} from 'react-native'
import { theme } from 'src/constants'

import EyeIcon from '../icons/EyeIcon'
import EyeSlashIcon from '../icons/EyeSlashIcon'
import Typography from '../Typography'

interface IInputPasswordProps {
  error?: string
  placeholder?: string
  value?: string
  onChangeText: (text: string) => void
  onSubmitEditing: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => void
}

export default function Input(props: IInputPasswordProps) {
  const [isPasswordVisible, setPasswordVisible] = React.useState(true)

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          value={props.value}
          style={styles.input}
          autoCapitalize="none"
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
          secureTextEntry={isPasswordVisible}
          onSubmitEditing={props.onSubmitEditing}
          placeholderTextColor={theme.colors.gray}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setPasswordVisible(!isPasswordVisible)}
        >
          {isPasswordVisible ? <EyeIcon /> : <EyeSlashIcon />}
        </TouchableOpacity>
      </View>
      {!!props.error?.length && (
        <Typography variant="Body" color="red">
          {props.error}
        </Typography>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    color: theme.colors.blue,
    fontSize: theme.fontSize.small,
    fontFamily: 'SofiaPro-SemiBold'
  },
  inputContainer: {
    gap: 16,
    height: 40,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.blue100
  }
})
