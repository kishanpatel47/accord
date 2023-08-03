import { Text, View, FlatList, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { Component } from 'react'
import firestore from '@react-native-firebase/firestore';

export default class FirestoreDisplaydataClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datalist: [],
            _datalist: [],
        
            searchtext: '',
            arrpeopleFilter: [],
        }
    }
    componentDidMount() {

        // 1 method  fetch data 
        firestore().collection('user').get().then((querySnapshot) => {
            let temp = []
            // console.log("Total size " + querySnapshot.size)
            querySnapshot.forEach((documentsnapshot) => {
                // console.log("documentsnapshot " + documentsnapshot.id)
                let data = documentsnapshot.data()
                data['id'] = documentsnapshot.id;
                temp.push(data)
                this.setState({ datalist: temp })
            })


        })

        //2 Method fetch data
        //  firestore().collection("user").onSnapshot((data)=>{
        //  this.setState({datalist:data.docs})
        //  console.log(data.docs)
        //  })


    }
//     searchfilter = () => {
//         var filterdata = []
//         // filterdata = this.state.datalist.filter((data) => {
//         //     if (data.firstname.toLowerCase().includes(this.state.searchtext.toLowerCase()))
//         //         return data;
//         // })

//       filterdata =this.state.datalist.filter((data)=>{
//     return data.firstname.toLowerCase().includes(this.state.searchtext.toLowerCase())
// })

//         this.setState({
//             datalist: filterdata
//         })
//         // filterdata=this.state.datalist.filter((data)=>{
//         //     return data.firstname.toLowerCase().includes(this.state.searchtext.toLowerCase())
//         // })

//     }

searchfilter = peopleString => {
    var filterdata = []
        filterdata =this.state.datalist.filter((data)=>{
    return data.firstname.toLowerCase().includes(this.state.searchtext.toLowerCase())
})

        this.setState({
            datalist: filterdata
        })
  };


    Deleteuser = ({ id }) => {
        console.log(" myxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx id" + id)
        firestore().collection('user').doc(id).delete(id).then(() => {

            alert('data delete')
        })

        console.log("Delete user id :->" + id)
    }
    render() {
        const DisplaydataRenderItem = ({ item, index }) => {
            console.log("item :->" + JSON.stringify(item,null,2))
            return (
                <View
                    key={index}
                    style={{
                        backgroundColor: 'white',
                        padding: 5
                    }}>
                    <View style={{ backgroundColor: 'black', flexDirection: 'row' }}>

                        <Image style={{ resizeMode: 'center', height: 113, width: 127, }} source={{ uri: item.imageuri }} />
                        <View style={{ left: 10 }}>
                            {/* <Text style={{color:'white'}}>Doc Id: {item.id}</Text> */}
                            <Text style={{ color: 'white' }}>Name: {item.firstname}</Text>
                            <Text style={{ color: 'white' }}>Lastname: {item.lastname}</Text>
                            <Text style={{ color: 'white' }}>Email: {item.email}</Text>

                            <Text style={{ color: 'white' }}>Address: {item.address}</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() =>{this.props.navigation.navigate('FirestoreUpdatedata',{user:item})} } >
                                <Image style={{ tintColor: 'white' }} source={require('../../../../assets/Images/editicon.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.Deleteuser(item)}>
                                <Image style={{ tintColor: 'white', marginLeft: 5 }} source={require('../../../../assets/Images/delete.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )
        }
        return (
            <View>
                <View>
                    <View style={{ backgroundColor: '#D6D5CB' }}>
                        <TextInput
                            placeholder={'Search in here'}
                            onChangeText={(text) => {
                          if(text.length>0){
                            this.setState(
                                {
                                    searchtext :text
                            
                            
                            },()=>{
                                this.searchfilter(text)
               
                            }
                            
                            
                            )
                         }
                       

                           console.log(text)
                        
                         
                    }
                }/>
    
                    </View>
                </View>

                <FlatList
                    data={ this.state.arrpeopleFilter ? this.state.datalist :null}
                    renderItem={DisplaydataRenderItem}

                />


            </View>
        )
    }
}