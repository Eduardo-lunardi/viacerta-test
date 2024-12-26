import React from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'
import { theme } from 'src/constants'

interface IPropsContainer {
  children?: React.ReactNode
  variant?: 'white' | 'gray'
}

export default function Container({
  children,
  variant = 'white',
  style,
  ...restProps
}: IPropsContainer & ViewProps) {
  const backgroundColor = theme.colors[variant]
  const containerStyle = [styles.container, { backgroundColor }]

  return (
    <View style={[containerStyle, style]} {...restProps}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 32
  }
})
