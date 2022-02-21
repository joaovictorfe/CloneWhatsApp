import styles from './styles';
import React, { memo } from 'react';
import { FlatList, View } from 'react-native';
import ChatListOption from '../../Components/ChatListItem';

const chats = [
    {
        id: 0,
        name: 'Nome muito grande de contato salvo',
        lastMessage: 'Última mensagem muito grande para ser exibida completa',
        hourLastMessage: '99:99',
        notification: '5',
        picture:
            'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    {
        id: 1,
        name: 'Nome',
        lastMessage: 'Last Message',
        hourLastMessage: '18:36',
        notification: '15',
        picture:
            'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    {
        id: 2,
        name: 'Nome',
        lastMessage: 'Last Message',
        hourLastMessage: '18:36',
        notification: '215',
        picture:
            'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    {
        id: 3,
        name: 'Nome',
        lastMessage: 'Last Message',
        hourLastMessage: '18:36',
        notification: '3.215',
        picture:
            'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    {
        id: 4,
        name: 'Nome',
        lastMessage: 'Last Message',
        hourLastMessage: '18:36',
        notification: '43.215',
        picture:
            'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    {
        id: 5,
        name: 'Nome',
        lastMessage: 'Last Message',
        hourLastMessage: '18:36',
        notification: '543.215',
        picture:
            'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    {
        id: 6,
        name: 'Nome',
        lastMessage: 'Last Message',
        hourLastMessage: '18:36',
        notification: '5',
        picture:
            'https://images.pexels.com/photos/372042/pexels-photo-372042.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    {
        id: 7,
        name: 'Nome',
        lastMessage: 'Last Message',
        hourLastMessage: '18:36',
        notification: '5',
        picture:
            'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    {
        id: 8,
        name: 'Nome',
        lastMessage: 'Last Message',
        hourLastMessage: '18:36',
        notification: '5',
        picture:
            'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    {
        id: 9,
        name: 'Nome',
        lastMessage: 'Last Message',
        hourLastMessage: '18:36',
        notification: '5',
        picture:
            'https://images.pexels.com/photos/8666975/pexels-photo-8666975.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    {
        id: 10,
        name: 'Nome',
        lastMessage: 'Last Message',
        hourLastMessage: '18:36',
        notification: '5',
        picture:
            'https://images.pexels.com/photos/1755385/pexels-photo-1755385.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    {
        id: 11,
        name: 'Nome',
        lastMessage: 'Last Message',
        hourLastMessage: '18:36',
        notification: '5',
        picture:
            'https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    {
        id: 12,
        name: 'Nome',
        lastMessage: 'Last Message',
        hourLastMessage: '18:36',
        notification: '5',
        picture:
            'https://images.pexels.com/photos/8438878/pexels-photo-8438878.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    {
        id: 13,
        name: 'Nome',
        lastMessage: 'Last Message',
        hourLastMessage: '18:36',
        notification: '5',
        picture:
            'https://images.pexels.com/photos/6749758/pexels-photo-6749758.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    {
        id: 14,
        name: 'Nome',
        lastMessage: 'Last Message',
        hourLastMessage: '18:36',
        notification: '5',
        picture:
            'https://images.pexels.com/photos/8819388/pexels-photo-8819388.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    {
        id: 15,
        name: 'Nome',
        lastMessage: 'Last Message',
        hourLastMessage: '18:36',
        notification: '5',
        picture:
            'https://images.pexels.com/photos/10057707/pexels-photo-10057707.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    {
        id: 16,
        name: 'Nome',
        lastMessage: 'Last Message',
        hourLastMessage: '18:36',
        notification: '5',
        picture:
            'https://images.pexels.com/photos/8101331/pexels-photo-8101331.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    {
        id: 17,
        name: 'Nome',
        lastMessage: 'Last Message',
        hourLastMessage: '18:36',
        notification: '5',
        picture:
            'https://images.pexels.com/photos/10159292/pexels-photo-10159292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    {
        id: 18,
        name: 'Nome',
        lastMessage: 'Last Message',
        hourLastMessage: '18:36',
        notification: '5',
        picture:
            'https://images.pexels.com/photos/7526917/pexels-photo-7526917.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
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
                    bounces={false}
                />
            </View>
        </View>
    );
};
export default memo(Conversas);
