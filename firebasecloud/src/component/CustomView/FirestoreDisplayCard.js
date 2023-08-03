import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'

const FirestoreDisplayCard = ({item}) => {
    return (
        <View>
            <View style={{ height: Dimensions.get('screen').height / 6.89, backgroundColor: 'red',borderRadius:5,top:5 }} >
                <View style={{flexDirection:'row',flex:1,alignSelf:'flex-start',marginTop:5,marginLeft:5}}>

                    <Image style={{ height: 100, width: 100 }} source={require('../../../assets/Images/firestoreimage.jpg')} />
                
                    <View style={{marginLeft:5}}>
                        <Text>{'firstname :->' }kishan</Text>
                        <Text>{'lastname :->'}patel</Text>
                        <Text>{'email :->'}patel@gmail.com</Text>
                        <Text>{'address :->'}patel1223</Text>

                    </View>
                
                </View>
            </View>


        </View>
    )
}

export default FirestoreDisplayCard

const styles = StyleSheet.create({})