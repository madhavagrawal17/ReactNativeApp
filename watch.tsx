
import React, { Component, useState } from 'react';
import {SafeAreaView, StyleSheet, TextInput, Button, Alert} from 'react-native';
import * as Watch from 'react-native-watch-connectivity'

export class Connectivity extends Component {
  
  render() {
    const [message, setMessage] = useState('');
    const sendMessageToAppleWatch = () => {
      Watch.sendMessage({message}, error => {
        if (error) {
          Alert.alert(`the message "${message}" can't be sent`);
        }
      });
    };
    return (
      <SafeAreaView style={styles.container}>
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder="message"
        />
        <Button onPress={sendMessageToAppleWatch} title="SEND" />
      </SafeAreaView>
    );
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Connectivity;