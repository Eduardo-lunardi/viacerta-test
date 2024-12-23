import { StyleSheet, TextInput, TextInputProps, View } from 'react-native'
import { theme } from 'src/constants'

import Typography from '../Typography'

interface ICPFInputProps extends TextInputProps {
  error?: string
  placeholder?: string
}

export default function CPFInput(props: ICPFInputProps) {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        placeholderTextColor={theme.colors.gray}
        {...props}
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
