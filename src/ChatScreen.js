import React from 'react';
import Styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Clip from 'react-native-vector-icons/Foundation';
import Plane from 'react-native-vector-icons/Ionicons';
import {
  SafeAreaView,
  StatusBar,
  Text,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  View,
} from 'react-native';

import MessageBox from './MessageBox';

export default function ChatScreen() {
  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <StatusBar barStyle="light-content" backgroundColor="#1f1f1f" />
        <Header>
          <TouchableOpacity>
            <Icon name="keyboard-arrow-left" size={32} color="#e20f44" />
          </TouchableOpacity>
          <Name>Joao Santos - Pintor</Name>
          <Text> </Text>
        </Header>
        <ScrollView
          style={{
            height: '70%',
            backgroundColor: '#f9f9f9',
            display: 'flex',
            flexDirection: 'row',
            padding: 20,
          }}
          contentInsetAdjustmentBehavior="automatic">
          <MessageBox />
        </ScrollView>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            height: '20%',
          }}>
          <TextBox placeholder="Digite sua menssagem" />
          <ButtonTextBox>
            <Clip name="paperclip" size={32} color="#a1a1a1" />
          </ButtonTextBox>
          <ButtonTextBox>
            <Plane name="paper-plane-sharp" size={32} color="#e20f44" />
          </ButtonTextBox>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
const Header = Styled.View`
  background-color: #1f1f1f;
  height: 100px;
  display : flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center
`;
const Name = Styled.Text`
  color: #fff;
  font-size: 16px
`;
const TextBox = Styled.TextInput`
  width:70%;
  background-color: #fff;
  height: 60px;
`;
const ButtonTextBox = Styled.TouchableOpacity`
  width:15%;
  height: 60px;
  background-color: #fff;
  height: 60px;
  
  display: flex;
  justify-content: space-around;
  align-items: center
`;
