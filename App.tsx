import React from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components'

import { Navigation } from './src/navigation'
import theme from './theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar barStyle={'dark-content'} backgroundColor={'#FFFFFF'} />
          <Navigation />
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}
