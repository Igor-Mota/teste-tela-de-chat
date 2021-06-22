import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {View, Image, ScrollView} from 'react-native';

export default function MessageBox() {
  const date = new Date();
  const temp = [
    {
      data: date,
      id: 1,
      message:
        'Ola Joao, preciso de um serviço de pintura para um comodo de 20m2.',
    },
    {data: date, id: 1, message: 'Tenho Urgência. Você tem disponibilidade?'},
    {
      data: date,
      id: 2,
      message: 'Olá Lucia! Vou te passar uma estimativa a seguir ',
    },
  ];
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages(temp);
  }, []);
  return (
    <ScrollView>
      {messages.map(message => {
        if (message.id === 1) {
          return (
            <View style={{display: 'flex', flexDirection: 'row'}} key={message.id + Math.random() * 700}>
              <MyMessage >
                <MyTextMessage>{message.message}</MyTextMessage>
              </MyMessage>
              <Elipse>
                <Image
                  source={require('./assets/images/mulher.jpg')}
                  style={{width: 40, height: 40, borderRadius: 20}}
                />
              </Elipse>
            </View>
          );
        }
        if (message.id === 2) {
          return (
            <View style={{display: 'flex', flexDirection: 'row'}} key={message.id}>
              <Elipse>
                <Image
                  source={require('./assets/images/pintor.jpg')}
                  style={{width: 40, height: 40, borderRadius: 20}}
                />
              </Elipse>
              <OtherMessage >
                <OtherTextMessage>{message.message}</OtherTextMessage>
              </OtherMessage>
            </View>
          );
        }
      })}
    </ScrollView>
  );
}
const MyMessage = styled.View`
  background: #d4e8cf;
  width: 300px;
  border-radius: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 20px;

  display: flex;
`;
const OtherMessage = styled.View`
  background: #efefef;
  width: 300px;
  border-radius: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 20px;
`;
const MyTextMessage = styled.Text`
  font-size: 18px;
  text-align: right;
  color: #000;
`;
const OtherTextMessage = styled.Text`
  font-size: 18px;
  color: #000;
`;
const Elipse = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #000;
  margin-top: 15px;
  margin-left: 7px;
`;
