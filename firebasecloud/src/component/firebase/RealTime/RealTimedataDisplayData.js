import { Image, Text, View, StyleSheet, ScrollView, Dimensions, TouchableOpacity, FlatList, TextInput } from 'react-native'
import React, { Component } from 'react'
import { firebase } from '@react-native-firebase/database';

export default class RealTimedataDisplayData extends Component {

  constructor(props) {
    super(props);
    this.state = {
      datalist: [],
      arrpeopleFilter: [],
      userKeys: []
    }

  }




  componentDidMount() {
    firebase.app().database('https://fir-cloud-758cd-default-rtdb.firebaseio.com/').ref('/RealTimeDatabase').once('value').then((onshapshot) => {
      let temp = []
      let data = onshapshot.val();
  
      let keys = Object.keys(data)
      let item = Object.values(data)
      this.setState({ datalist: item, userKeys: keys })
    })

  }
  searchfilter = (firstname) => {


    this.setState({
      arrpeopleFilter: this.state.items.filter(function (item) {
        return item.firstname.toLowerCase().includes(firstname.toLowerCase());

      }),

    });
  };
  // console.log('onsnapshot :-> ' + onsnapshot)
  // let data = onsnapshot.val();
  // let items = Object.values(data)
  // items['id']=onsnapshot.val
  // console.log('items' + JSON.stringify(items))
  // this.setState({datlist: items })

  DeleteData = ({ id }) => {
    firebase.app().database('https://fir-cloud-758cd-default-rtdb.firebaseio.com/').ref('/RealTimeDatabase').remove(id).then(() => {
      console.log("delete data ")
    });
    console.log('id --->' + id)
  }

  render() {
    const DisplaydataRenderItem = ({ item, keys, index }) => {
      // console.log("item :->" + item)
      return (
        <View
          key={index}
          style={{
            backgroundColor: 'white',
            padding: 5
          }}>
          <View style={{ backgroundColor: 'black', flexDirection: 'row' }}>

            <Image style={{ resizeMode: 'center', height: 113, width: 127, }} source={{ uri: item.uri }} />
            <View style={{ left: 10 }}>
              {/* <Text style={{color:'white'}}>Doc Id: {item.id}</Text> */}
              <Text style={{ color: 'white' }}>Name: {item.firstname}</Text>
              <Text style={{ color: 'white' }}>Lastname: {item.lastname}</Text>
              <Text style={{ color: 'white' }}>Email: {item.email}</Text>

              <Text style={{ color: 'white' }}>Address: {item.address}</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => {this.props.navigation.navigate('RealTimeDatabaseUpdate',{user:item, currentKey: this.state.userKeys[index] }) }} >
                <Image style={{ tintColor: 'white' }} source={require('../../../../assets/Images/editicon.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.DeleteData(item)}>
                <Image style={{ tintColor: 'white', marginLeft: 5 }} source={require('../../../../assets/Images/delete.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )
    }
    return (
      <View style={styles.container}>


        <View>
          <View style={{ backgroundColor: '#D6D5CB' }}>
            <TextInput
              placeholder={'Search in here'}
              onChangeText={(text) => this.searchfilter(text)}
            />
          </View>

        </View>
        <FlatList
          data={ this.state.datalist }
          renderItem={DisplaydataRenderItem}

        />


        {/* {this.state.items.map((item, index) => {
          return (
            <View>
              {this.state.items.length > 0 ?
                <View>

                  <View key={index} style={{ flexDirection: 'row', backgroundColor: 'red', top: 5, margin: 5, padding: 5, borderRadius: 5 }}>
                    <View style={{}} >
                      <Image style={{ height: 70, width: 70, justifyContent: 'center' }} source={require('../../../../assets/Images/lock.png')} />
                    </View>

                    <View style={{ flexDirection: 'column' }}>

                      <Text style={{ paddingLeft: 5, color: 'black', fontWeight: 'bold' }} >{"First name :->" + item.firstname}</Text>
                      <Text style={{ paddingLeft: 5, color: 'black', fontWeight: 'bold' }} >{"Last name :->" + item.lastname}</Text>
                      <Text style={{ paddingLeft: 5, color: 'black', fontWeight: 'bold' }}>{"Email :->" + item.email}</Text>
                      <Text style={{ paddingLeft: 5, color: 'black', fontWeight: 'bold' }}>{"address :->" + item.address}</Text>

                    </View>
                    <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'flex-end', flexDirection: 'row', right: 5 }}>
                      <TouchableOpacity onPress={() => { console.log("list data" + JSON.stringify(this.state.item)), this.props.navigation.navigate('RealTImeDatabaseUpdatedata', { listdata:item }) }}>
                        <Image style={{ height: 24, width: 24, alignSelf: 'flex-end', right: 10 }} source={require('../../../../assets/Images/editicon.png')} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => this.DeleteData(`${item.email}`)} >
                        <Image style={{ height: 24, width: 24, alignSelf: 'flex-end', }} source={require('../../../../assets/Images/delete.png')} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                :
                <View style={{ flex: 1 }}>
                  <Text>No  asdasdstore</Text>
                </View>


              }
            </View>
          )
        })} */}

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