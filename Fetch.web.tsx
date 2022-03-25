import React, { Component, useState } from 'react';
import { ActivityIndicator, FlatList, View, StyleSheet } from 'react-native';
import { Button, Card, TextInput, Text } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';


function Fetch () { 
  const [message, setMessage] = useState('');
  const [data, setData] = useState('');
  var serverData = "";
  setTimeout(syncData, 3000);

  async function syncData() {
    // get data from the API
    console.log("SyncData");
    try {
      const response = await fetch('http://localhost:3000/getData')
      .then(async function (response) {
        if (response.ok) {
          const received = JSON.parse(await response.json());
          //console.log("match:"+received["data"] !== serverData);
          if(received["data"] !== serverData){
            serverData = received["data"];
            //console.log("Received: "+serverData);
           // await setMessage("hello");
            await WriteToExcel(serverData);
          }
          return;
        }
      });
  
      // update value to Azure API
      // await getData();
      // await fetch("http://localhost:3000/setData", {
      //   method: "POST",
      //   body: JSON.stringify({
      //       "data": message
      //   }),
      //   headers: {
      //       "Content-type": "application/json; charset=UTF-8"
      //   }
      // })
      // .then(response => response.json())
      // .then(json => console.log(json));
    } catch(e){
      console.log("failed:"+e);
    }
   
    setTimeout(syncData, 3000);
  }
  const SetData =  async () => {
    await fetch("http://localhost:3000/setData", {
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
    // WriteToExcel({message});
  }
  
  const WriteToExcel = async (received) => {
    // Send Message
    await Excel.run(async (context) => { 
      var range = context.workbook.getSelectedRange();
      range.load(['address', 'values']);
      console.log({received});
      range.values = [[received]];
      await context.sync();
      console.log(range.address);
    });
    // fetch("http://localhost:3000/setData", {
    //   method: "POST",
    //   body: JSON.stringify({
    //       "data": message
    //   }),
    //   headers: {
    //       "Content-type": "application/json; charset=UTF-8"
    //   }
    // })
    // .then(response => response.json())
    // .then(json => console.log(json));
  };

  async function getData() {
    try {
      await Excel.run(async (context) => { 
        var range = context.workbook.getSelectedRange();
        range.load(['address', 'values']);
        await context.sync().then(async function () {
          if (range.values[0][0] !== ""){
            console.log("rageValue: "+range.values[0][0]);
            setData(range.values[0][0]);
            console.log("Data:"+{data});
            await fetch("http://localhost:3000/setData", {
              method: "POST",
              body: JSON.stringify({
                  "data": range.values[0][0]
              }),
              headers: {
                  "Content-type": "application/json; charset=UTF-8"
              }
            })
            .then(response => response.json())
            .then(json => console.log(json));
          }
        });
        console.log(range.address);
      });
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
        <Button style={styles.button} onPress={SetData}>
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