import { View, Text, Image, StyleSheet, useWindowDimensions, Button, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import CheckBox from 'react-native-check-box';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';

import paramounts_logo from '../../../../../asserts/images/paramounts_logo.png';
import CustomInputs from '../../CustomeInputs/CustomInputs';
import React, { useState } from 'react'

const RegistrationPage = () => {
  const { height } = useWindowDimensions();
  // const navigation = useNavigation();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [navigateRegistration, setNavigateRegistration] = useState(false);

  const [isRemberMe, setIsRemberMe] = useState(false);
  const [registration, setRegistration] = React.useState(false);

  const handleLogin = event => {
    event.preventDefault();
    console.log('handleClick 👉️');

    console.log("userName:", userName, " password:", password);
  };
  const handleTextClick = () => {
    console.log('Text clicked!');
    setNavigateRegistration(true)
    // Perform actions when the text is clicked
  };
  console.log("sign page render");
  return (
    <ScrollView>
      <View style={styles.root}>
        <Image source={paramounts_logo} style={[styles.logo, { height: height * .30 }]} resizeMode='center' />
        <Text style={styles.loginText}>LoginPage</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.userName} placeholder="Username or Email"
            value={userName} onChangeText={setUserName} autoCapitalize="none" />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.password} placeholder="Paasword"
            value={password} onChangeText={setPassword}
            autoCapitalize="none" secureTextEntry={true} />
        </View>
        {/* <View style={styles.checkboxContainer}>
          <CheckBox isChecked={isRemberMe} onClick={() => setIsRemberMe(!isRemberMe)} style={styles.checkbox}
            checkBoxColor={isRemberMe ? 'red' : 'black'} rightTextStyle='blue' />
        </View> */}
        <View>
        </View>
        <View style={styles.loginbtn}>
          <Button title="Submit" onPress={handleLogin} />
        </View>
     
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 40
  },
  logo: {
    width: 100,
    maxWidth: 300,
    maxHeight: 600
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5
  },
  loginText: {
    color: '#393737',
    fontSize: 20,
    paddingBottom: 55
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginTop: 30,
    paddingLeft: 5,
    width: '100%',
  },
  checkbox: {
    marginLeft: 5,
  },
  label: {
    marginLeft: 5,
  },
  btnContainer: {
    marginTop: 45,
    width: '100%',
    color: '#223FBC',
    borderRadius: 1,
    borderWidth: 1,
    borderColor: '#223FBC'
  },
  forgotPwd: {

  },
  loginbtn: {
    marginTop: 70,
    width: '100%',
    color: 'red',
    textShadowColor: '#e8e8e8'
  },
  sign: {
    margin: 30,
    borderBottomWidth: 0.2
  }
})
export default RegistrationPage