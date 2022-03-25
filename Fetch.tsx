import React, { Component, useState } from 'react';
import { ActivityIndicator, FlatList, View, StyleSheet } from 'react-native';
import { Button, Card, TextInput, Text } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';


function Fetch () { 
  const [message, setMessage] = useState('');
  const [data, setData] = useState('Hello');
  const sendData = () => {
    fetch("http://localhost:3000/setData", {
      method: "POST",
      body: JSON.stringify({
          "data": message
      }),
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(json => console.log(json));
  };

  async function getData() {
    try {
      const response = await fetch('http://localhost:3000/getData');
      //console.log(JSON.stringify(await response.json()));
      const received = JSON.parse(await response.json());
      console.log("getData"+ received["data"]);
      setData(received["data"]);
    } catch (error) {
      console.log(error);
    } finally {
    }
  }
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
        <View style={styles.row}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Data"
        />
        <Button style={styles.button} onPress={sendData}>
          SetData
          </Button>
        </View>
        <View style={styles.row}>
        <Text style={styles.input}>
          {data}
        </Text>
        <Button style={styles.button} onPress={getData}>
          GetData
          </Button>
        </View>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'aliceblue',
    alignItems: 'center',
    paddingTop: 5,
  },
  card: {
    width: '90%',
    backgroundColor: "steelblue"
  },
  input: {
    alignContent: "center",
    backgroundColor: "skyblue",
    width: '50%',
    marginBottom: 20
  },
  button: {
    backgroundColor: "skyblue",
    alignContent: "center",
    textAlign: "center",
    alignItems: 'center',
    width: '50%',
    marginBottom: 20,
    marginLeft: 5
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default Fetch;