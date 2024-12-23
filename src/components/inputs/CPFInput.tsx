import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputSubmitEditingEventData,
  View
} from 'react-native'
import { theme } from 'src/constants'

import Typography from '../Typography'

interface ICPFInputProps {
  error?: string
  value?: string
  onChangeText: (text: string) => void
  onSubmitEditing: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => void
}

export default function CPFInput(props: ICPFInputProps) {
  const handleCpfChange = (text: string) => {
    let formattedCpf = text.replace(/\D/g, '')

    if (formattedCpf.length > 11) {
      formattedCpf = formattedCpf.slice(0, 11)
    }

    if (formattedCpf.length <= 11) {
      formattedCpf = formattedCpf.replace(
        /(\d{3})(\d{3})(\d{3})(\d{1,2})/,
        '$1.$2.$3-$4'
      )
    }

    props.onChangeText(formattedCpf)
  }

  return (
    <View>
      <TextInput
        maxLength={14}
        value={props.value}
        style={styles.input}
        keyboardType="numeric"
        placeholder="000.000.000-00"
        onChangeText={handleCpfChange}
        placeholderTextColor={theme.colors.gray}
        onSubmitEditing={props.onSubmitEditing}
      />
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
    height: 40,
    width: '100%',
    borderBottomWidth: 1,
    color: theme.colors.blue,
    fontSize: theme.fontSize.small,
    fontFamily: 'SofiaPro-SemiBold',
    borderBottomColor: theme.colors.blue100
  }
})
