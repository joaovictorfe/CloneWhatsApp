import styles from './styles';
import React, { memo } from 'react';
import Header from '../../Components/Header';
import { ScrollView, View } from 'react-native';
import ChatListOption from '../../Components/ChatListItem';
import HeaderOptions from '../../Components/HeaderOptions';
const Conversas = () => {
    return (
        <View style={styles.container}>
            <Header />
            <HeaderOptions />
            <View style={styles.chats}>
                <ScrollView bounces={false}>
                    <ChatListOption
                        name="Nome muito grande de contato salvo"
                        lastMessage="Última mensagem muito grande para ser exibida completa"
                        hourLastMessage="99:99"
                        notification="5"
                    />
                    <ChatListOption
                        name="Nome"
                        lastMessage="Last Message"
                        hourLastMessage="18:36"
                        notification="15"
                    />
                    <ChatListOption
                        name="Nome"
                        lastMessage="Last Message"
                        hourLastMessage="18:36"
                        notification="215"
                    />
                    <ChatListOption
                        name="Nome"
                        lastMessage="Last Message"
                        hourLastMessage="18:36"
                        notification="3.215"
                    />
                    <ChatListOption
                        name="Nome"
                        lastMessage="Last Message"
                        hourLastMessage="18:36"
                        notification="43.215"
                    />
                    <ChatListOption
                        name="Nome"
                        lastMessage="Last Message"
                        hourLastMessage="18:36"
                        notification="543.215"
                    />
                    <ChatListOption
                        name="Nome"
                        lastMessage="Last Message"
                        hourLastMessage="18:36"
                        notification="5"
                    />
                    <ChatListOption
                        name="Nome"
                        lastMessage="Last Message"
                        hourLastMessage="18:36"
                        notification="5"
                    />
                    <ChatListOption
                        name="Nome"
                        lastMessage="Last Message"
                        hourLastMessage="18:36"
                        notification="5"
                    />
                    <ChatListOption
                        name="Nome"
                        lastMessage="Last Message"
                        hourLastMessage="18:36"
                        notification="5"
                    />
                    <ChatListOption
                        name="Nome"
                        lastMessage="Last Message"
                        hourLastMessage="18:36"
                        notification="5"
                    />
                    <ChatListOption
                        name="Last Chat"
                        lastMessage="Message"
                        hourLastMessage="18:36"
                        notification="5"
                    />
                </ScrollView>
            </View>
        </View>
    );
};
export default memo(Conversas);
