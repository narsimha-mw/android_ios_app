import { View, Text,TextInput,StyleSheet } from 'react-native'
import React from 'react'

const CustomButton = (props) => {
    const {title}= props;
  return (
    <View style={styles.container}>
      <TextInput >{title}</TextInput>
    </View>
  )
}
const styles= StyleSheet.create({
    container:{
        // backgroundColor:'#FFFFFF',
        // width:'100%',
        // borderColor:'#e8e8e8',
        // borderWidth:1,
        // borderRadius:5,
        // paddingHorizontal:10,
        // marginVertical:5
    },
})

export default CustomButton