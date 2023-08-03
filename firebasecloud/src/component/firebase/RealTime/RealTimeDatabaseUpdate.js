import { Text, TextInput, View, Dimensions, Image, TouchableOpacity, Alert, KeyboardAvoidingView, ScrollView, Platform } from 'react-native'
import React, { Component, useState } from 'react'
import { firebase } from '@react-native-firebase/database';
import { launchImageLibrary } from 'react-native-image-picker';

export default class RealTimeDatabaseUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key:'',
      firstname: '',
      lastname: '',
      email: '',
      address: '',
      uri :null,
      userUpdateKey: ''
   
    }
  }


  componentDidMount() {
    firebase.app().database('https://fir-cloud-758cd-default-rtdb.firebaseio.com/').ref('/RealTimeDatabase').once('value').then((onsnapshot) => {
      console.log("user id  " + JSON.stringify( this.props,null,2))
      console.log("Key ===" + this.props.route.params.currentKey)
      this.setState({
        key: this.props.route.key,
        // key:onsnapshot.key,
        firstname: this.props.route.params.user.firstname,
        lastname: this.props.route.params.user.lastname,
        email: this.props.route.params.user.email,
        address: this.props.route.params.user.address,

      uri :this.props.route.params.user.uri,

      userUpdateKey: this.props.route.params.currentKey
      })

      //  var key = Object.keys(onsnapshot.val())
      //  console.log('key '+ key)


      // if (res.exists) {
      //   const user= onsnapshot.val();
      //   console.log('user' + JSON.stringify( user,null,2))
      //   this.setState({
      //     // key: res.id,
      //     key:onsnapshot.key,
      //     firstname: user.firstname,
      //     lastname: user.lastname,
      //     email: user.email,
      //     address: user.address
      //   })


      // }
      // else{
      //   console.log("documents does not exits !")
      // }
      // console.log('onsnapshot =>' +JSON.stringify( onsnapshot,null,2) )
    })
    console.log("list :-" + JSON.stringify(this.props.route.key))
  }
  UpdateUser = () => {
    console.log("This State Key " + this.state.key)
    firebase.app().database('https://fir-cloud-758cd-default-rtdb.firebaseio.com/').ref('RealTimeDatabase/' + this.state.userUpdateKey).update({
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      address: this.state.address,
      uri:this.state.uri
      
    }).then(()=>{
  //  this.setState({
  //   firstname: '',
  //   lastname:'',
  //   email: '',
  //   address: '',
  //   // imageuri:''
   
  //  });
   this.props.navigation.navigate('RealTimedataDisplayData')
   console.log('data update')

    })
  }
 
  render() {
    const UpdateImage = () => {
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
           console.log('response111111', JSON.stringify(res.assets[0].uri));
          this.setState({
            fileUri: res.assets[0].uri,
            uri :res.assets[0].uri
          });
        }
      });
      
    }
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>

        <View style={{ justifyContent: 'center', flex: 1 }}>
          <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center', flexDirection: 'column' }}>
            
            
            <TouchableOpacity onPress={() => {UpdateImage() }}>
              
            
              <Image style={{ height: 100, width: 100, aspectRatio: 1.00, resizeMode: 'contain', alignSelf: 'center' }} source={{uri:this.state.uri}} />
            </TouchableOpacity>
            <Text style={{ fontWeight: 'bold', fontSize: 19, color: 'black', alignItems: 'flex-start', marginTop: 10 }}>Firebase RealTimeDatabase {this.state.listdata} </Text>

            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: 'grey', marginTop: 10, width: Dimensions.get('screen').width / 1.2, alignSelf: 'center' }}>
              <Image style={{ tintColor: 'black', paddingHorizontal: 4, left: 5 }} source={require('../../../../assets/Images/person.png')} />
              <TextInput value={this.state.firstname} placeholder='Enter the First name ' placeholderTextColor={'white'} style={{ flex: 1, left: 5 }} onChangeText={(val) => this.setState({ firstname: val })} />

            </View>
            <View style={{ marginTop: 5, display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: 'grey', width: Dimensions.get('screen').width / 1.2, alignSelf: 'center' }}>
              <Image style={{ left: 5, tintColor: 'black', paddingHorizontal: 4 }} source={require('../../../../assets/Images/person.png')} />
              <TextInput value={this.state.lastname} onChangeText={(userlastname) => this.setState({ lastname: userlastname })} placeholder='Enter the Last name ' placeholderTextColor={'white'} style={{ flex: 1, left: 5 }} />

            </View>
            <View style={{ marginTop: 5, display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: 'grey', width: Dimensions.get('screen').width / 1.2, alignSelf: 'center' }}>
              <Image style={{ left: 5, tintColor: 'black', paddingHorizontal: 4 }} source={require('../../../../assets/Images/email.png')} />

              <TextInput value={this.state.email} onChangeText={(useremail) => this.setState({ email: useremail })} placeholder='Enter the Email ' placeholderTextColor={'white'} style={{ left: 5, flex: 1 }} />

            </View>
            <View style={{ marginTop: 5, display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: 'grey', width: Dimensions.get('screen').width / 1.2, alignSelf: 'center' }}>
              <Image style={{ left: 5, tintColor: 'black', paddingHorizontal: 4, justifyContent: 'center' }} source={require('../../../../assets/Images/home.png')} />

              <TextInput value={this.state.address} onChangeText={(useraddress) => this.setState({ address: useraddress })} placeholder='Enter the Address ' placeholderTextColor={'white'} style={{ left: 5, flex: 1 }} />

            </View>
            <TouchableOpacity onPress={() => {
              this.UpdateUser()


            }}>
              <View style={{ marginTop: 10, alignItems: 'center', backgroundColor: '#FFD700', padding: 10, borderRadius: 30 }}>
                <Text style={{ color: 'black' }}>
                  Update Data
                </Text>
              </View>
            </TouchableOpacity>



          </View>
        </View>



      </KeyboardAvoidingView>
    )
  }
}