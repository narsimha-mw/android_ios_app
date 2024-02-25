import { View, Text,TextInput,StyleSheet } from 'react-native'
import React from 'react'

const CustomInputs = (props) => {
    const {value, placeholder,setValue,secureTextEntry}= props;
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeholder}
       value={value}
       autoCapitalize="none"
       onChangeText={setValue} 
       style={styles.input}
       secureTextEntry={secureTextEntry}></TextInput>
    </View>
  )
}
const styles= StyleSheet.create({
    container:{
        backgroundColor:'#FFFFFF',
        width:'100%',
        borderColor:'#e8e8e8',
        borderWidth:1,
        borderRadius:5,
        paddingHorizontal:10,
        marginVertical:5
    },
    input:{
    // paddingLeft:
    // alignItems:'center',
    // textAlign:'center'
    },
    password:{

    }
})

export default CustomInputs