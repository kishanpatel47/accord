import { Image, Text, View, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { firebase } from '@react-native-firebase/database';

export default class RealTimedataDisplayData extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
     
    }

  }

  


  componentDidMount() {
    firebase.app().database('https://fir-database-1f296-default-rtdb.firebaseio.com/').ref('/RealTimeDatabase').on('value', (snapshot) => {
      console.log("List Data" + JSON.stringify(snapshot, null, 2))
      let data = snapshot.val();
      let items = Object.values(data);
      console.log("item" +JSON.stringify(items,null,2))
      this.setState({ items });
      //  let a_ =data.val();
      //  let items=Object.values(data);
      //  this.setState({items})

      //   let item =[];
      // console.log( "Json Data :-> " + JSON.stringify(data,null,2));
      //   let a_=data.val();
      //   // console.log(a_)
      //   for(let x  in a_){
      //     console.log(x)
      //     console.log(a_[x])
      //     item.push({firstname:a_[x],lastname:a_[x],email:a_[x],address:a_[x]})
      //   }
      //   this.setState({item})
    })
  }
  

  render() {
    
    return (
      <View style={styles.container}>
        {this.state.items.reverse().map((item, index) => {
          console.log(item)
          return (




            <View key={index} style={{ flexDirection: 'row', backgroundColor: 'red', top: 5, margin: 5, padding: 5, borderRadius: 5 }}>
              <View style={{}} >
                <Image style={{ height: 70, width: 70, justifyContent: 'center' }} source={require('../../assets/Images/lock.png')} />
              </View>

              <View style={{ flexDirection: 'column' }}>

                <Text style={{ paddingLeft: 5, color: 'black', fontWeight: 'bold' }} >{"First name :->" + item.firstname}</Text>
                <Text style={{ paddingLeft: 5, color: 'black', fontWeight: 'bold' }} >{"Last name :->" + item.lastname}</Text>
                <Text style={{ paddingLeft: 5, color: 'black', fontWeight: 'bold' }}>{"Email :->" + item.email}</Text>
                <Text style={{ paddingLeft: 5, color: 'black', fontWeight: 'bold' }}>{"address :->" + item.address}</Text>

              </View>
              <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'flex-end', flexDirection: 'row', right: 5 }}>
                <TouchableOpacity  onPress={() =>{alert("list data" + JSON.stringify(this.state.items)),this.props.navigation.navigate('RealTImeDatabaseUpdatedata',{listdata :item})}}>
                  <Image style={{ height: 24, width: 24, alignSelf: 'flex-end', right: 10 }} source={require('../../assets/Images/editicon.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.DeleteData()} >
                  <Image style={{ height: 24, width: 24, alignSelf: 'flex-end', }} source={require('../../assets/Images/delete.png')} />
                </TouchableOpacity>
              </View>
            </View>
          )
        })}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'grey'
  },
  text: {

  }
})