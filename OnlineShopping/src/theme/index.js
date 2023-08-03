import React from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { Content } from './Content';

export  const CustomTheme = extendTheme({
  fonts: {
    header: 'MontserratExtrabold',
    meadium: 'MontserratMedium',
    regular: 'MontserratRegular',
    semibold: 'MontserratSemibold',
  }, 
  colors: {
      green :{
        300:'#53B175'
      },
      black: {
        100: '#C4C4C4',
        200: '#7C7C7C',
        300: '#292929',
        800: '#181725',
      },
      // Add new color
      primary: {
        50: '#E3F2F9',
        100: '#C5E4F3',
        200: '#A2D4EC',
        300: '#7AC1E4',
        400: '#47A9DA',
        500: '#0088CC',
        600: '#007AB8',
        700: '#006BA1',
        800: '#005885',
        900: '#003F5E',
      },
      // Redefinig only one shade, rest of the color will remain same.
      amber: {
        400: '#d97706',
      },
    },
    components: {
      // Button: {
      //   // Can simply pass default props to change default behaviour of components.
      //   baseStyle: {
      //     rounded: "md",
      //   },
      //   defaultProps: {
      //     colorScheme: "red",
      //   },
      // },
      Heading: {
        // Can pass also function, giving you access theming tools
        baseStyle: ({ colorMode }) => {
          return {
            color: colorMode === "dark" ? "red.300" : "blue.300",
            fontWeight: "normal",
          };
        },
        defaultProps:{
          size:'xl',
          fontFamily:'MontserratExtrabold'
        }
      },
      Text:{
        baseStyle:({colorMode}) =>{
      return   {  
        color :colorMode === "dark" ? 'black.100' :'black.300'
        }

    },
    defaultProps:{
      size:'md',
      fontFamily:'MontserratSemibold'
    },

    sizes: {
      xl: {
        fontSize: "64px"
      },
      lg: {
        fontSize: "32px"
      },
      md: {
        fontSize: "16px"
      },
      sm: {
        fontSize: "12px"
      }
    }




      }
    },
    // config: {
    //   // Changing initialColorMode to 'dark'
    //   initialColorMode: 'dark',
    // },
  });

//   return (
//     <NativeBaseProvider theme={theme}>
//       <Content />
//     </NativeBaseProvider>
//   );
