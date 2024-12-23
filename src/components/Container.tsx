import React from 'react'
import {
  ScrollView,
  ScrollViewProps,
  StyleSheet,
  View,
  ViewProps
} from 'react-native'
import { theme } from 'src/constants'

interface IPropsContainer {
  scroll?: boolean
  children?: React.ReactNode
  variant?: 'white' | 'gray'
}

type ConditionalProps<HasScroll extends boolean> = HasScroll extends true
  ? IPropsContainer & ScrollViewProps
  : IPropsContainer & ViewProps

export default function Container({
  children,
  scroll,
  variant = 'white',
  ...restProps
}: ConditionalProps<true | false>) {
  const backgroundColor = theme.colors[variant]
  const containerStyle = [styles.container, { backgroundColor }]

  if (scroll) {
    return (
      <ScrollView
        style={containerStyle}
        contentContainerStyle={styles.scrollContent}
        {...(restProps as ConditionalProps<true>)}
      >
        {children}
      </ScrollView>
    )
  }
  return (
    <View
      style={[containerStyle, restProps.style]}
      {...(restProps as ConditionalProps<false>)}
    >
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 32
  },
  scrollContent: {
    paddingBottom: 16
  }
})
