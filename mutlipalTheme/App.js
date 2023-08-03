import { View, Text, StyleSheet, TouchableOpacity, AsyncStorage, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'

const App = () => {debugger;
  const [colorTheme, setColorTheme] = useState('')
 var themecolor ='black' ? 'black ':'blue'
 
  const bgColor = colorTheme  != themecolor ? 'blue' :'white';
  useEffect(() => {
    const currentThemeColor = AsyncStorage.getItem('theme-color')
    if (currentThemeColor) {
      setColorTheme(currentThemeColor)
    }
  }, [])
  console.log(colorTheme);
  console.log(themecolor);
  console.log(bgColor);
  
  const handleClick = (theme) => {
    setColorTheme(theme)
    AsyncStorage.setItem('theme-color', theme)
  }

  return (
    <View style={{ flex: 1 }}>

      <View style={{ flexDirection: 'row', alignSelf: 'flex-end', top: 5 }}>
        <TouchableOpacity onPress={() => handleClick('white')}>
          <View style={{ height: 20, width: 20, backgroundColor: 'white', marginRight: 4 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleClick('grey')}>
          <View style={{ height: 20, width: 20, backgroundColor: 'grey', marginRight: 4 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleClick('red')}>
          <View style={{ height: 20, width: 20, backgroundColor: 'red', marginRight: 4 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleClick('blue')}>
          <View style={{ height: 20, width: 20, backgroundColor: 'blue', marginRight: 4 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleClick('yellow')}>
          <View style={{ height: 20, width: 20, backgroundColor: 'yellow', marginRight: 4 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleClick('orange')}>
          <View style={{ height: 20, width: 20, backgroundColor: 'orange', marginRight: 4 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleClick('skyblue')}>
          <View style={{ height: 20, width: 20, backgroundColor: '#87CEEB', marginRight: 4 }} />
        </TouchableOpacity>
      </View>
      <View style={[style.box, { alignSelf: 'center', justifyContent: 'center', top: 50,backgroundColor:colorTheme }]}>
        <StatusBar backgroundColor={colorTheme} />
        <Text style={{color:bgColor   }}>Multipal Themes Switcher/React</Text>
        <Text style={[style.subtitle, {}]}>
          The Rock's other catchphrases are “Know your role and shut your mouth”, “It doesn't matter what you think” , “Finally the Rock has come back home” and “The Jabroni-beatin', pie-eatin', Hell-raisin', trailblazin', People's Champ!”
        </Text>


      </View>
    </View>
  )
}

export default App;
const style = StyleSheet.create({

  body: {
    backgroundColor: '#FFF',
    color: 'red',
    padding: 0,
    height: '40%'

  },
  box: {
    margin: 0,
    backgroundColor: 'grey',
    borderRadius: 5,
    height: '95%'
  },
  // title: {
  //   lineHeight: 20,

  //   fontSize: 20,
  //   color:
  // }
  subtitle: {
    lineHeight: 20,
    fontSize: 18
  },
  red: {
    backgroundColor: '#bec767'
  },
  redtextcolor: {
    color: '#ffff'
  },
  blue: {
    backgroundColor: '#bec767'
  },
  bluetextcolor: {
    color: '#ffff'
  },
  yellow: {
    backgroundColor: '#bec767'
  },
  yellowtextcolor: {
    color: '#ffff'
  },
  oriange: {
    backgroundColor: '#bec767'
  },
  oriangetextcolor: {
    color: '#ffff'
  }
})