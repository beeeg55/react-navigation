/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';

class ChatScreen extends React.Component {
  static navigationOptions = {
    headertitle: 'Chat',
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#673ab7',
        }}>
        <Text>Chat!</Text>
      </View>
    );
  }
}
export default ChatScreen;
