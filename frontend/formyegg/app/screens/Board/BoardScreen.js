import React from 'react';
import {Text, View, Button} from 'react-native';

const BoardScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>BoardScreen! 🎉</Text>
      <Button title="글작성" onPress={() => navigation.navigate('Write')} />
      <Button title="채팅" onPress={() => navigation.navigate('Chat')} />
    </View>
  );
};

export default BoardScreen;