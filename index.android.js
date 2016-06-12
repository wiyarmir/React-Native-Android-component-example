'use strict';

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import ProgressBar from './progressbar';

class TestProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          React code
        </Text>
        <Text style={styles.instructions}>
          This is coming straight from JS world!
        </Text>
        <ProgressBar
          progress={0}
          indeterminate={true}
          style={styles.progressBar} />
        <Text>
          After
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  progressBar: {
    height: 50,
    // flex: 1,
    margin: 20,
    width: Dimensions.get('window').width - 2 * 20,
  },
});

AppRegistry.registerComponent('TestProject', () => TestProject);
