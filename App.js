import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class RedButton extends Component {
  render() {
    return(
      <Button color = "red" title = "ClickMe"></Button>
    );
    
  }
}

export default class App extends Component {
  render() {
    return (
        <View style = {{marginTop : 500}}>
          <RedButton/>
          <Text> MyFirstApp</Text>
        </View>
    );
  }
}