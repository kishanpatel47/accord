import { Text, TextInput, View, Dimensions, Image, TouchableOpacity, Alert } from 'react-native'
import React, { Component, useState } from 'react'
import { firebase } from '@react-native-firebase/auth';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',

      hidePassword: false
    }

  }
  render() {
    const { firstname, lastname, email, password } = this.state
    const Registernow = () => {
      console.log('First name :->' + firstname)
      console.log('Last name :->' + lastname)
      console.log('email:->' + email)
      console.log('Password:->' + password)   
     firebase.app().auth().createUserWithEmailAndPassword(email,password).then(()=>{
      // console.log('Register created ' + firstname,lastname,email,password)
       alert("User acccount created  " )
      
this.props.navigation.navigate('Login')



     }).catch((RegisterError) =>{
  console.log("Register Error  :->  " +RegisterError )
     })

      // firebase.app().
      // database('https://cloudoperation-278f5-default-rtdb.firebaseio.com/').ref('/user'+firstname).set({
      //   firstname:firstname,lastname:lastname,email:email,password:password
        
      // }).then(()=>{
      //   console.log("data set")
      // })

    }
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center', flexDirection: 'column' }}>
        <Image style={{ height: 100, width: 100, aspectRatio: 1.00, resizeMode: 'contain', alignSelf: 'center' }} source={require('../../../asstes/Images/firebaselogo.png')} />
        <Text style={{ fontWeight: 'bold', fontSize: 19, color: 'black', alignItems: 'flex-start', marginTop: 10 }}>REGISTER HERE </Text>
        <Text style={{ fontSize: 14, color: 'black', alignItems: 'flex-start', marginTop: 2 }}>firebase Register here  </Text>
       
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: 'grey', marginTop: 10, width: Dimensions.get('screen').width / 1.2, alignSelf: 'center' }}>
          <Image style={{ tintColor: 'black', paddingHorizontal: 4,left:5 }} source={require('../../../asstes/Images/person.png')} />
          <TextInput placeholder='Enter the First name ' placeholderTextColor={'white'} style={{ flex: 1 ,left:5}} onChangeText={(username) => this.setState({ firstname: username })} />

        </View>
        <View style={{ marginTop: 5, display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: 'grey', width: Dimensions.get('screen').width / 1.2, alignSelf: 'center' }}>
          <Image style={{left:5 , tintColor: 'black', paddingHorizontal: 4 }} source={require('../../../asstes/Images/person.png')} />
          <TextInput onChangeText={(userlastname) => this.setState({ lastname: userlastname })} placeholder='Enter the Last name ' placeholderTextColor={'white'} style={{ flex: 1 ,left:5 }} />

        </View>
        <View style={{ marginTop: 5, display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: 'grey', width: Dimensions.get('screen').width / 1.2, alignSelf: 'center' }}>
          <Image style={{ left:5,tintColor: 'black', paddingLeft: 4 }} source={require('../../../asstes/Images/email.png')} />
          <TextInput onChangeText={(useremail) => this.setState({ email: useremail })} placeholder='Enter the Email ' placeholderTextColor={'white'} style={{ left:5,flex: 1 }} />

        </View>
        <View style={{ marginTop: 5, display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: 'grey', width: Dimensions.get('screen').width / 1.2, alignSelf: 'center' }}>
          <Image style={{ tintColor: 'black', left:5 }} source={require('../../../asstes/Images/lock.png')} />
          <TextInput onChangeText={(userpassword) => this.setState({ password: userpassword })} secureTextEntry={this.state.hidePassword} placeholder='Enter the Password ' placeholderTextColor={'white'} style={{ flex: 1 ,left:5}} />
          <TouchableOpacity onPress={() => this.setState({ hidePassword: !this.state.hidePassword })}>
            <Image source={(this.state.hidePassword) ? require('../../../asstes/Images/eyeon.png') : require('../../../asstes/Images/eyeoff.png')} style={{ right: 5 }} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => {
          Registernow()


        }}>
          <View style={{ marginTop: 10, alignItems: 'center', backgroundColor: '#FFD700', padding: 10, borderRadius: 30 }}>
            <Text style={{ color: 'black' }}>
              Register
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ bottom: 5, position: 'absolute', alignSelf: 'center' }} onPress={() => this.props.navigation.navigate('Login')}>
          <View style={{ alignItems: 'center', bottom: 5, position: 'relative', alignSelf: 'center' }}>
            <Text style={{ color: 'black' }}>Already  Register user ? Login now</Text>

          </View>
        </TouchableOpacity>

      </View>
    )
  }
}
