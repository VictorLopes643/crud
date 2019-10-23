import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import FormRow from '../components/FormRow';

export default class LoginScreen extends Component {

  constructor(props){
    super(props);

    this.state = {
      email: '',
      pass: '',
    }
  }
  
  onChangeHandler(key, value){
    this.setState({[key]: value})
  }

  tryLogin(){
    console.log(this.state);
  }

  render() {
    return (
      <View>
        <FormRow>
            <TextInput 
            value={this.state.email}
            onChangeText={value => this.onChangeHandler('email', value)}
            placeholder = 'lopes643@gmail.com'
            style={styles.input}/> 
        </FormRow>
        <FormRow>
            <TextInput 
              value={this.state.pass}
              onChangeText={value => this.onChangeHandler('pass', value)}
              placeholder='******' 
              style={styles.input} 
              secureTextEntry/> 
        </FormRow>
        <Button 
          title='Login'
          onPress={() => this.tryLogin()}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  input: {
    padding: 5
  }

})