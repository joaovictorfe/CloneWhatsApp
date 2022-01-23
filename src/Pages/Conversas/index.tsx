import styles from './styles';
import React, { memo } from 'react';
import Header from '../../components/Header';
import { FlatList, View } from 'react-native';
import ChatListOption from '../../components/ChatListItem';
import HeaderOptions from '../../components/HeaderOptions';

const chats = [
    {
        id: 0,
        name: 'Nome muito grande de contato salvo',
        lastMessage: 'Última mensagem muito grande para ser exibida completa',
        hourLastMessage: '99:99',
        notification: '5',
        picture: 'http://lorempixel.com.br/500/400/?1',
    },
    {
        id: 1,
        name: 'Nome',
        lastMessage: 'Last Message',
        hourLastMessage: '18:36',
        notification: '15',
    },
    {
        id: 2,
        name: 'Nome',
        lastMessage: 'Last Message',
        hourLastMessage: '18:36',
        notification: '215',
    },
    {
        id: 3,
        name: 'Nome',
        lastMessage: 'Last Message',
        hourLastMessage: '18:36',
        notification: '3.215',
    },
    {
        id: 4,
        name: 'Nome',
        lastMessage: 'Last Message',
        hourLastMessage: '18:36',
        notification: '43.215',
    },
    {
        id: 5,
        name: 'Nome',
        lastMessage: 'Last Message',
        hourLastMessage: '18:36',
        notification: '543.215',
    },
    {
        id: 6,
        name: 'Nome',
        lastMessage: 'Last Message',
        hourLastMessage: '18:36',
        notification: '5',
    },
    {
        id: 7,
        name: 'Nome',
        lastMessage: 'Last Message',
        hourLastMessage: '18:36',
        notification: '5',
    },
    {
        id: 8,
        name: 'Nome',
        lastMessage: 'Last Message',
        hourLastMessage: '18:36',
        notification: '5',
    },
    {
        id: 9,
        name: 'Nome',
        lastMessage: 'Last Message',
        hourLastMessage: '18:36',
        notification: '5',
    },
    {
        id: 10,
        name: 'Nome',
        lastMessage: 'Last Message',
        hourLastMessage: '18:36',
        notification: '5',
    },
    {
        id: 11,
        name: 'Nome',
        lastMessage: 'Last Message',
        hourLastMessage: '18:36',
        notification: '5',
    },
    {
        id: 12,
        name: 'Nome',
        lastMessage: 'Last Message',
        hourLastMessage: '18:36',
        notification: '5',
    },
    {
        id: 13,
        name: 'Nome',
        lastMessage: 'Last Message',
        hourLastMessage: '18:36',
        notification: '5',
    },
    {
        id: 14,
        name: 'Nome',
        lastMessage: 'Last Message',
        hourLastMessage: '18:36',
        notification: '5',
    },
    {
        id: 15,
        name: 'Nome',
        lastMessage: 'Last Message',
        hourLastMessage: '18:36',
        notification: '5',
    },
    {
        id: 16,
        name: 'Nome',
        lastMessage: 'Last Message',
        hourLastMessage: '18:36',
        notification: '5',
    },
    {
        id: 17,
        name: 'Nome',
        lastMessage: 'Last Message',
        hourLastMessage: '18:36',
        notification: '5',
    },
    {
        id: 18,
        name: 'Nome',
        lastMessage: 'Last Message',
        hourLastMessage: '18:36',
        notification: '5',
    },
];

const Conversas = () => {
    return (
        <View style={styles.container}>
            <View style={styles.chats}>
                <FlatList
                    data={chats}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <ChatListOption
                            name={item.name}
                            lastMessage={item.lastMessage}
                            hourLastMessage={item.hourLastMessage}
                            notification={item.notification}
                            picture={item.picture}
                        />
                    )}
                />
            </View>
        </View>
    );
};
export default memo(Conversas);
