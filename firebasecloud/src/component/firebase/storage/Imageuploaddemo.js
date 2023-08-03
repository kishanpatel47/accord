import { TouchableOpacity, Text, View, Image } from 'react-native'
import React, { Component } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import firebase from '@react-native-firebase/storage'

export default class Imageuploaddemo extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }
launchCameraopen =()=>{
    let options = {
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
     launchCamera(options, (res) => {
        console.log('Response = ', res);
        if (res.didCancel) {
          console.log('User cancelled image picker');
        } else if (res.error) {
          console.log('ImagePicker Error: ', res.error);
        } else if (res.customButton) {
          console.log('User tapped custom button: ', res.customButton);
          alert(res.customButton);
        } else {
          const source = { uri: res.uri };
          console.log('response',res.assets[0].uri);
  
          
          this.setState({
            filePath: res,
            fileData: res.data,
            fileUri: res.assets[0].uri
          });
        }
      });
    }



    render() {
        return (
            <View>
           <Image
            source={{ uri: this.state.fileUri }}
            style={{ width: 200, height: 200 }}
          />

                <TouchableOpacity onPress={() => {this.launchCameraopen()}}>
                    <View style={{alignItems:'center',marginTop:5,backgroundColor:'red',padding:10,borderRadius:20}} >
                        <Text style={{color:'white'}}>
                            Camera{this.state.fileUri}
                        </Text>

                    </View>

                </TouchableOpacity>


                <TouchableOpacity onPress={() => {}}>
                    <View style={{alignItems:'center',marginTop:5,backgroundColor:'red',padding:10,borderRadius:20}} >
                        <Text style={{color:'white'}}>
                            Gallery
                        </Text>

                    </View>

                </TouchableOpacity>

            </View>
        )
    }
}