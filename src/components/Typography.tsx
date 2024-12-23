import { StyleSheet, Text, TextProps } from 'react-native'
import { theme } from 'src/constants'

interface TypographyProps extends TextProps {
  variant: 'Heading' | 'Body'
  color?: keyof typeof theme.colors
}

export default function Typography({ variant, color = 'blue', style, ...restProps }: TypographyProps) {
  return <Text style={[styles[variant], { color: theme.colors[color] }, style]} {...restProps} />
}

const styles = StyleSheet.create({
  Heading: {
    fontSize: theme.fontSize.large,
    fontFamily: 'SofiaPro-SemiBold'
  },
  Body: {
    fontSize: theme.fontSize.small,
    fontFamily: 'SofiaPro-SemiBold'
  }
})
