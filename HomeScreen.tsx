import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';

function HomeScreen ({navigation}) {
  return (
    <ScrollView style={styles.scrollView}>
      <Card style={styles.card}>
      <Card.Content style={styles.content}>
          <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('Watch')}>
            Watch
          </Button>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content style={styles.content}>
          <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('Excel')}>
            Excel
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: DefaultTheme.colors.background,
    paddingTop: 10,
  },
  card: {
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: "steelblue",
    marginBottom: 10
  },
  button: {
    width: '100%',
    height: "100%",
    backgroundColor: "steelblue",
    alignContent: "center",
    textAlign: "center"
  },
  content: {
      flex:1
  }
});

export default HomeScreen