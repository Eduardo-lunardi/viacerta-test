import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native'
import { theme } from 'src/constants'

interface ButtonProps extends TouchableOpacityProps {
  text: string
}

export default function Button({ text, disabled, ...restProps }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: disabled ? theme.colors.gray : theme.colors.orange }
      ]}
      disabled={disabled}
      {...restProps}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: theme.fontSize.small,
    fontFamily: 'SofiaPro-SemiBold'
  }
})
