
import React, { Component } from 'react'
import { NativeBaseProvider } from 'native-base'

import Login from './src/Login'
import { CustomTheme } from './src/theme'
import { SafeAreaProvider } from 'react-native-safe-area-context'
export default class App extends Component {
  render() {
    return (
  <NativeBaseProvider theme={CustomTheme}>
<SafeAreaProvider> 
<Login/>
</SafeAreaProvider>
   </NativeBaseProvider>
        )
  }
}