import { View, Text } from 'react-native'
import React from 'react'
import { Heading, HStack, Switch, useColorMode } from 'native-base'
import { styles } from './styles'

 export const Header = () => {
  const {colorMode,toggleColorMode} =useColorMode
  const isDarkMode =colorMode ==='dark';
  const toggleSwitch =()=>{
    toggleColorMode();
  }
    return (
    <HStack style={styles.headerContainer}>
<Heading>My Stack</Heading>
   <Switch 
  //  defaultIsChecked={isDarkMode}
    offTrackColor={'black.800'}
    onTrackColor='primary.200'
    onThumbColor='blueGray.100'
    offThumbColor='red'
    value={isDarkMode}
    onValueChange={toggleSwitch}
   />

    </HStack>
  )
}

