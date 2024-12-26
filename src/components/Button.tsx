import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native'
import { theme } from 'src/constants'

interface ButtonProps extends TouchableOpacityProps {
  text: string
  variant?: 'primary' | 'secondary'
  loading?: boolean
}

export default function Button({
  text,
  disabled,
  variant = 'primary',
  loading,
  ...restProps
}: ButtonProps) {
  const activityIndicatorColor =
    variant === 'secondary' ? theme.colors.orange : theme.colors.white

  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles[variant],
        disabled && styles.disabledButton
      ]}
      disabled={disabled || loading}
      {...restProps}
    >
      {loading ? (
        <ActivityIndicator size="small" color={activityIndicatorColor} />
      ) : (
        <Text
          style={[
            styles.buttonText,
            variant === 'secondary' && styles.secondaryText
          ]}
        >
          {text}
        </Text>
      )}
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
  },
  primary: {
    backgroundColor: theme.colors.orange
  },
  secondary: {
    backgroundColor: 'transparent',
    borderColor: theme.colors.orange,
    borderWidth: 1
  },
  secondaryText: {
    color: theme.colors.orange
  },
  disabledButton: {
    backgroundColor: theme.colors.gray,
    borderColor: theme.colors.gray
  }
})
