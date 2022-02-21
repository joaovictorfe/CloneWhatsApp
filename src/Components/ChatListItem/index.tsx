import { useNavigation } from '@react-navigation/native';
import React, { memo } from 'react';
import { Pressable, Text, View } from 'react-native';
import globalStyles from '../../Utils/globalStyles';
import Badge from '../Badge';
import ImageProfile from '../ImageProfile';
import styles from './styles';

type Props = {
    picture?: string;
    name: string;
    lastMessage?: string;
    hourLastMessage?: string;
    notification?: string;
};

const ChatListItem = ({
    hourLastMessage,
    lastMessage,
    name,
    notification,
    picture,
}: Props) => {
    const navigator = useNavigation();

    return (
        <Pressable
            onPress={() =>
                navigator.navigate('Chat', { source: picture, userName: name })
            }
            style={styles.container}>
            <ImageProfile source={picture} />
            <View style={styles.informations}>
                <View style={styles.chatInfos}>
                    <Text numberOfLines={1} style={globalStyles.title}>
                        {name}
                    </Text>
                    <Text numberOfLines={1} style={globalStyles.subText}>
                        {lastMessage}
                    </Text>
                </View>
                <View style={styles.hourNotification}>
                    <View style={styles.date}>
                        <Text style={[styles.hour, globalStyles.subText]}>
                            {hourLastMessage}
                        </Text>
                    </View>
                    <View>
                        {notification ? <Badge text={notification} /> : <></>}
                    </View>
                </View>
            </View>
        </Pressable>
    );
};
export default memo(ChatListItem);
