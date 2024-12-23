import React from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import { Navigation } from './src/navigation'

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#FFFFFF'} />
        <Navigation />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
