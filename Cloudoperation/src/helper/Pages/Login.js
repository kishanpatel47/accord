import { Text, TextInput, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { firebase } from '@react-native-firebase/auth';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidePassword: false,
      email: '',
      password: ''
    }

  }
  render() {
    const { email, password } = this.state;
    const Signin = () => {


      console.log(' --------------------------------   Firebase Sign  in   ------------------------------')
      console.log("Email :->" + email)
      console.log("Password :->" + password)
    
        firebase.app().auth().signInWithEmailAndPassword(email,password).then(()=>{
         alert ("user  Sign in here" + email,password)
         this.props.navigation.navigate('Dashboard')
        }).catch((Loginerror) =>{
          console.log("LOgin error" +Loginerror)
        })
      

    }

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center', flexDirection: 'column' }}>
        <Image style={{ height: 100, width: 100, aspectRatio: 1.00, resizeMode: 'contain', alignSelf: 'center' }} source={require('../../../asstes/Images/firebaselogo.png')} />
        <Text style={{ fontWeight: 'bold', fontSize: 19, color: 'black', alignItems: 'flex-start', marginTop: 10 }}>WELCOME BACK </Text>
        <Text style={{ fontSize: 14, color: 'black', alignItems: 'flex-start', marginTop: 2 }}>firebase login here  </Text>
        <View style={{ marginTop: 5, display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: 'grey', width: Dimensions.get('screen').width / 1.2, alignSelf: 'center' }}>
          <Image style={{ left: 5, tintColor: 'black', paddingLeft: 4 }} source={require('../../../asstes/Images/email.png')} />
          <TextInput onChangeText={(useremail) => this.setState({ email: useremail })} placeholder='Enter the Email ' placeholderTextColor={'white'} style={{ left: 5, flex: 1 }} />

        </View>
        <View style={{ marginTop: 5, display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: 'grey', width: Dimensions.get('screen').width / 1.2, alignSelf: 'center' }}>
          <Image style={{ tintColor: 'black', left: 5 }} source={require('../../../asstes/Images/lock.png')} />
          <TextInput onChangeText={(userpassword) => this.setState({ password: userpassword })} secureTextEntry={this.state.hidePassword} placeholder='Enter the Password ' placeholderTextColor={'white'} style={{ flex: 1, left: 5 }} />
          <TouchableOpacity onPress={() => this.setState({ hidePassword: !this.state.hidePassword })}>
            <Image source={(this.state.hidePassword) ? require('../../../asstes/Images/eyeon.png') : require('../../../asstes/Images/eyeoff.png')} style={{ right: 5 }} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => { Signin() }}>
          <View style={{ marginTop: 10, alignItems: 'center', backgroundColor: '#FFD700', padding: 10, borderRadius: 30 }}>
            <Text style={{ color: 'black' }}>
              Login here
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ bottom: 5, position: 'absolute', alignSelf: 'center' }} onPress={() => this.props.navigation.navigate('Register')}>
          <View style={{ alignItems: 'center', bottom: 5, position: 'absolute', alignSelf: 'center' }}>
            <Text style={{ color: 'black' }}>Not a Register user ? Register now</Text>

          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
