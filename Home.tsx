import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';

import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Button,
} from 'react-native'

class Home extends Component {
  state = {
    count: 0
  }

  onPress = () => {
    this.setState({
      count: this.state.count + 1
    })
  }


 render() {

    return (
      <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'steelblue' }}>
        <Text style={styles.titleText}>Interactor</Text>
      </View>
      <View style={{ flex: 5, backgroundColor: 'skyblue' }} />
      <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
      </View>
    )
  }
}

// export default class Homescreen extends Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//           <Button
//           title="Go to About"
//           onPress={() => this.props.navigation.navigate('About')}
// />
//       </View>
//     )
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'powderblue',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#0000CC',
    padding: 10,
    marginBottom: 10
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  baseText: {
    fontFamily: "Cochin"
  }
})

export default Home;