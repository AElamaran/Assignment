import React, { useState, useEffect } from 'react'
import { TouchableOpacity, StyleSheet, View, ToastAndroid,Alert} from 'react-native'
import { Text } from 'react-native-paper'


import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'

import axios, { AxiosError } from 'axios';

import { nameValidator } from '../helpers/nameValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { updateError } from '../helpers/updator'

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [error, setError] = useState('')

  const onLoginPressed = () => {
    const usernameError = nameValidator(username.value)
    const passwordError = passwordValidator(password.value)

    if (usernameError || passwordError) {
      setUsername({ ...username, error: usernameError })
      setPassword({ ...password, error: passwordError })
      console.log('User name or password error');

      return;

    }

    else {
      Login();
      //  console.log('login success');
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'Bottomnavigation' }],
    })
  };

  const [login, setLogin] = useState([]);

  const Login = () => {

    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        
        username: 'kminchelle',
        password: '0lelplR',
        // expiresInMins: 60, // optional
      })
    })
    .then(res => res.json())
    .then(console.log);
  };
  useEffect(() => {
    Login();
  }, []);

  return (
    // <Background>

      <View style={styles.loginbox}>
        <Header >Welcome</Header>
        <TextInput
          label="User Name"
          returnKeyType="next"
          value={username.value}
          onChangeText={(text) => setUsername({ value: text, error: '' })}
          error={!!username.error}
          errorText={username.error}
          autoCapitalize="none"
          autoCompleteType="username"
          textContentType="username"
          keyboardType="name"
        />
        <TextInput
          label="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: '' })}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />
      
        <Button mode="contained" onPress={onLoginPressed}>
          Login

        </Button>



      </View>
    // </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  

  loginbox: {
    marginBottom:150,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'white',
    padding: 20,
    flex:1,
    borderRadius: 5,
    opacity: 0.9,
  }
})
