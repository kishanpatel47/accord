// // // Example of Image Picker in React Native
// // // https://aboutreact.com/example-of-image-picker-in-react-native/

// // // Import React
// import React, {useState} from 'react';
// // Import required components
// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Image,
//   Platform,
//   PermissionsAndroid,
// } from 'react-native';

// import ImagePicker from 'react-native-image-picker';
// import {
//   launchCamera,
//   launchImageLibrary
// } from 'react-native-image-picker';

// const App = () => {
//   const [filePath, setFilePath] = useState({});

//   const requestCameraPermission = async () => {
//     if (Platform.OS === 'android') {
//       try {
//         const granted = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.CAMERA,
//           {
//             title: 'Camera Permission',
//             message: 'App needs camera permission',
//           },
//         );
//         // If CAMERA Permission is granted
//         return granted === PermissionsAndroid.RESULTS.GRANTED;
//       } catch (err) {
//         console.warn(err);
//         return false;
//       }
//     } else return true;
//   };

//   const requestExternalWritePermission = async () => {
//     if (Platform.OS === 'android') {
//       try {
//         const granted = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//           {
//             title: 'External Storage Write Permission',
//             message: 'App needs write permission',
//           },
//         );
//         // If WRITE_EXTERNAL_STORAGE Permission is granted
//         return granted === PermissionsAndroid.RESULTS.GRANTED;
//       } catch (err) {
//         console.warn(err);
//         alert('Write permission err', err);
//       }
//       return false;
//     } else return true;
//   };

//   const captureImage = async (type) => {
//     let options = {
//       mediaType: type,
//       maxWidth: 300,
//       maxHeight: 550,
//       quality: 1,
//       videoQuality: 'low',
//       durationLimit: 30, //Video max duration in seconds
//       saveToPhotos: true,
//     };
//     let isCameraPermitted = await requestCameraPermission();
//     let isStoragePermitted = await requestExternalWritePermission();
//     if (isCameraPermitted && isStoragePermitted) {
//       launchCamera(options, (response) => {
//         console.log('Response = ', response);

//         if (response.didCancel) {
//           alert('User cancelled camera picker');
//           return;
//         } else if (response.errorCode == 'camera_unavailable') {
//           alert('Camera not available on device');
//           return;
//         } else if (response.errorCode == 'permission') {
//           alert('Permission not satisfied');
//           return;
//         } else if (response.errorCode == 'others') {
//           alert(response.errorMessage);
//           return;
//         }
//         console.log('base64 -> ', response.base64);
//         console.log('uri -> ', response.uri);
//         console.log('width -> ', response.width);
//         console.log('height -> ', response.height);
//         console.log('fileSize -> ', response.fileSize);
//         console.log('type -> ', response.type);
//         console.log('fileName -> ', response.fileName);
//         const source = { uri: response.assets[0].uri };
//         setFilePath(source);
//       });
//     }
//   };

//   const chooseFile = (type) => {
//     let options = {
//       mediaType: type,
//       maxWidth: 300,
//       maxHeight: 550,
//       quality: 1,
//     };
//     launchImageLibrary(options, (response) => {
//       console.log('Response = ', response);

//       if (response.didCancel) {
//         alert('User cancelled camera picker');
//         return;
//       } else if (response.errorCode == 'camera_unavailable') {
//         alert('Camera not available on device');
//         return;
//       } else if (response.errorCode == 'permission') {
//         alert('Permission not satisfied');
//         return;
//       } else if (response.errorCode == 'others') {
//         alert(response.errorMessage);
//         return;
//       }
//       console.log('base64 -> ', response.base64);
//       console.log('uri -> ', response.uri);
//       console.log('width -> ', response.width);
//       console.log('height -> ', response.height);
//       console.log('fileSize -> ', response.fileSize);
//       console.log('type -> ', response.type);
//       console.log('fileName -> ', response.fileName);
//       const source = { uri: response.assets[0].uri };
//       setFilePath(source);
//     });
//   };

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <Text style={styles.titleText}>
//         Example of Image Picker in React Native
//       </Text>
//       <View style={styles.container}>
//         {/* <Image
//           source={{
//             uri: 'data:image/jpeg;base64,' + filePath.data,
//           }}
//           style={styles.imageStyle}
//         /> */}
//         <Image
//           source={{uri: filePath.uri}}
//           style={styles.imageStyle}
//         />
//         <Text style={styles.textStyle}>{filePath.uri}</Text>
//         <TouchableOpacity
//           activeOpacity={0.5}
//           style={styles.buttonStyle}
//           onPress={() => captureImage('photo')}>
//           <Text style={styles.textStyle}>
//             Launch Camera for Image
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           activeOpacity={0.5}
//           style={styles.buttonStyle}
//           onPress={() => captureImage('video')}>
//           <Text style={styles.textStyle}>
//             Launch Camera for Video
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           activeOpacity={0.5}
//           style={styles.buttonStyle}
//           onPress={() => chooseFile('photo')}>
//           <Text style={styles.textStyle}>Choose Image</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           activeOpacity={0.5}
//           style={styles.buttonStyle}
//           onPress={() => chooseFile('video')}>
//           <Text style={styles.textStyle}>Choose Video</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//   },
//   titleText: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     paddingVertical: 20,
//   },
//   textStyle: {
//     padding: 10,
//     color: 'black',
//     textAlign: 'center',
//   },
//   buttonStyle: {
//     alignItems: 'center',
//     backgroundColor: '#DDDDDD',
//     padding: 5,
//     marginVertical: 10,
//     width: 250,
//   },
//   imageStyle: {
//     width: 200,
//     height: 200,
//     margin: 5,
//   },
// });
// // App.js
// import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
// import ImagePicker, { launchCamera,launchImageLibrary } from 'react-native-image-picker';

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       resourcePath: {},
//        options : {
//         title: 'Select Image',
//         customButtons: [
//           { 
//             name: 'customOptionKey', 
//             title: 'Choose file from Custom Option' 
//           },
//         ],
//         storageOptions: {
//           skipBackup: true,
//           path: 'images',
//         },
//     }

//   }

//     // launchCamera(options, res => {
//     //   console.log('Response = ', res);
//     //   if (res.didCancel) {
//     //     console.log('User cancelled image picker');
//     //   } else if (res.error) {
//     //     console.log('ImagePicker Error: ', res.error);
//     //   } else if (res.customButton) {
//     //     console.log('User tapped custom button: ', res.customButton);
//     //     alert(res.customButton);
//     //   } else {
//     //     let source = res;
//     //     this.setState({
//     //       resourcePath: source,
//     //     });
//     //   }
//     // });


// }
//   render() {
//     const {options}=this.state
//     const  openPicker =()=>{
//       launchCamera(options, (response) => { // Use launchImageLibrary to open image gallery
//         console.log('Response = ', response);

//         if (response.didCancel) {
//           console.log('User cancelled image picker');
//         } else if (response.error) {
//           console.log('ImagePicker Error: ', response.error);
//         } else if (response.customButton) {
//           console.log('User tapped custom button: ', response.customButton);
//         } else {
//           const source = { uri:JSON.stringify( response ,null,2)};

//           // You can also display the image using data:
//           // const source = { uri: 'data:image/jpeg;base64,' + response.data };

//           console.log(source)
//         }
//       });
//   };  
//     return (
//       <View style={styles.container}>
//         <View style={styles.container}>
//           <TouchableOpacity onPress={()=>{openPicker()}}>
//           <Image
//             source={{
//               uri: 'data:image/jpeg;base64,' + this.state.resourcePath.uri,
//             }}
//             style={{ width: 100, height: 100 }}
//           />
//           </TouchableOpacity>
//           <Image
//             source={{ uri: this.state.resourcePath.uri }}
//             style={{ width: 200, height: 200 }}
//           />
//           <Text style={{ alignItems: 'center' }}>
//             {this.state.resourcePath.uri}
//           </Text>
//           <TouchableOpacity onPress={this.selectFile} style={styles.button}  >
//               <Text style={styles.buttonText}>Select File</Text>
//           </TouchableOpacity>       
//         </View>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff'
//   },
//   button: {
//     width: 250,
//     height: 60,
//     backgroundColor: '#3740ff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 4,
//     marginBottom:12    
//   },
//   buttonText: {
//     textAlign: 'center',
//     fontSize: 15,
//     color: '#fff'
//   }
// });






// App.js

import storage ,{firebase} from '@react-native-firebase/storage';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default class Imagestorage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resourcePath: {},
    };
  }
  uploadimagedata =()=>{
 firebase.app()
  }

  imageGalleryLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
   launchImageLibrary(options, (res) => {
      console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
         console.log('response', JSON.stringify(res.uri));
        this.setState({
          fileUri: res.assets[0].uri
        });
      }
    });
  }  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>

             <TouchableOpacity onPress={this.imageGalleryLaunch}   >
          <Image
            source={{ uri: this.state.fileUri }}
            style={{ width: 200, height: 200 }}
          />
          </TouchableOpacity>

          <Text style={{ alignItems: 'center' }}>
            {this.state.fileUri}
          </Text>

          <TouchableOpacity onPress={this.uploadimagedata} style={styles.button}  >
              <Text style={styles.buttonText}>Launch Image Gallery Directly</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  button: {
    width: 250,
    height: 60,
    backgroundColor: '#3740ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom:12    
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff'
  }
});





// import React, { useState } from 'react';
// import {
//   View,
//   SafeAreaView,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Platform,
//   Alert,
//   Image
// } from 'react-native';
// import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
// import storage from '@react-native-firebase/storage';

// export default function Imagestorage() {
//   const [image, setImage] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   const [transferred, setTransferred] = useState(0);
//   const selectImage = () => {
//     const options = {
//       maxWidth: 200,
//       maxHeight: 200,
//       storageOptions: {
//         skipBackup: true,
//         path: 'images'
//       }
//     };
//     launchImageLibrary(options, response => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//       } else {
//         const source = { uri: response.assets[0].uri };
//         console.log(source);
//         setImage(source);
//       }
//     });
//   };



//   const uploadImage = async () => {
//     const { uri } = image;
//     const filename = uri.substring(uri.lastIndexOf('/') + 1);
//     const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
//     // setUploading(true);
//     // setTransferred(0);
//     const task = storage()
//       .ref(filename)
//       .putFile(uploadUri);
//     // set progress state
//     task.on('state_changed', snapshot => {
//       setTransferred(
//         Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
//       );
//     });
//     try {
//       await task;
//     } catch (e) {
//       console.error(e);
//     }
//     // setUploading(false);
//     Alert.alert(
//       'Photo uploaded!',
//       'Your photo has been uploaded to Firebase Cloud Storage!'
//     );
//     // setImage(null);
//   };
//   return (
//     <SafeAreaView style={styles.container}>
//       <TouchableOpacity style={styles.selectButton} onPress={selectImage}>
//         <Text style={styles.buttonText}>Pick an image</Text>
//       </TouchableOpacity>
     
//       <View style={styles.imageContainer}>
//         {image !== null ? (
//           <Image source={{ uri: image.uri }} style={styles.imageBox} />
//         ) : null}
//         {uploading ? (
//           <View style={styles.progressBarContainer}>
//             <Progress.Bar progress={transferred} width={300} />
//           </View>
//         ) : (
//           <TouchableOpacity style={styles.uploadButton} onPress={uploadImage}>
//             <Text style={styles.buttonText}>Upload image</Text>
//           </TouchableOpacity>
//         )}
//       </View>
//     </SafeAreaView>
//   )
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: '#bbded6'
//   },
//   selectButton: {
//     borderRadius: 5,
//     width: 150,
//     height: 50,
//     backgroundColor: '#8ac6d1',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   uploadButton: {
//     borderRadius: 5,
//     width: 150,
//     height: 50,
//     backgroundColor: '#ffb6b9',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 20
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold'
//   },
//   imageContainer: {
//     marginTop: 30,
//     marginBottom: 50,
//     alignItems: 'center'
//   },
//   progressBarContainer: {
//     marginTop: 20
//   },
//   imageBox: {
//     width: 300,
//     height: 300
//   }
// });
