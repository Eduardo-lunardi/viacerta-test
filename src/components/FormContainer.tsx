import React from 'react'
import { ScrollView, StyleSheet, View, ViewProps } from 'react-native'
import { theme } from 'src/constants'

interface IFormContainerProps extends ViewProps {
  children?: React.ReactNode
}

export default function FormContainer({
  children,
  ...restProps
}: IFormContainerProps) {
  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={styles.contentContainer}
      {...restProps}
    >
      <View style={styles.formBox}>{children}</View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: theme.colors.gray
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  formBox: {
    backgroundColor: theme.colors.white,
    padding: 32,
    width: '100%'
  }
})
