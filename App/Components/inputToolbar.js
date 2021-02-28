import React from 'react';
import { Image, Text } from 'react-native';
import { InputToolbar, Actions, Composer, Send } from 'react-native-gifted-chat';
import Message from 'react-native-vector-icons/Entypo';

export const renderInputToolbar = (props) => (
    <InputToolbar
        {...props}
        containerStyle={{
            paddingTop: 6,
        }}
        primaryStyle={{ alignItems: 'center' }}
    />
);

export const renderActions = (props) => (
    <Actions
        {...props}
        containerStyle={{
            width: 44,
            height: 44,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 4,
            marginRight: 4,
            marginBottom: 0,
        }}
        icon={() => (
            <Message name="mail" size={25} />
        )}
        options={{
            'Choose From Library': () => {
                console.log('Choose From Library');
            },
            Cancel: () => {
                console.log('Cancel');
            },
        }}
        optionTintColor="#222B45"
    />
);

export const renderComposer = (props) => (
    <Composer
        {...props}
        textInputStyle={{
            color: '#222B45',
            borderRadius: 5,
            paddingTop: 8.5,
            marginLeft: 0,
        }}
    />
);

export const renderSend = (props) => (
    <Send
        {...props}
        disabled={!props.text}
        containerStyle={{
            width: 44,
            height: 44,
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 4,
        }}
    >
        <Text>Send</Text>
    </Send>
);