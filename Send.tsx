import React, { Component, useState } from 'react';
import {SafeAreaView, StyleSheet, Alert, View} from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';
import * as Watch from 'react-native-watch-connectivity'


function Send () { 
  const [message, setMessage] = useState('');
  const sendMessageToAppleWatch = () => {
    Watch.sendMessage({message}, error => {
      if (error) {
        Alert.alert(`the message "${message}" can't be sent`);
      }
    });
  };
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="message"
        />
        <Button style={styles.button} onPress={sendMessageToAppleWatch}>
          Send
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: DefaultTheme.colors.background,
    alignItems: 'center',
    paddingTop: 5,
  },
  card: {
    width: '90%',
    backgroundColor: "steelblue"
  },
  input: {
    width: '100%',
    alignContent: "center",
    backgroundColor: "skyblue",
    marginBottom: 10
  },
  button: {
    backgroundColor: "skyblue"
  }
});

export default Send;