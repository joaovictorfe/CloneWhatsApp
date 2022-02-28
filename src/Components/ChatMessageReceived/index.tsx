import React, { memo } from 'react';
import { View, Text } from 'react-native';
import Icons from '../Icons';
import styles from './styles';

type Props = {
    message: string;
    date: Date;
};

const ChatMessageReceived = ({ message, date }: Props) => {
    return (
        <View style={styles.container}>
            <Icons
                name="chatBorderLeft"
                size={24}
                color="headerBg"
                style={{ marginRight: -5 }}
            />
            <View style={styles.textBox}>
                <Text style={styles.text}>{message}</Text>
                <Text style={styles.time}>
                    {date.getHours()}:{date.getMinutes()}
                </Text>
            </View>
        </View>
    );
};
export default memo(ChatMessageReceived);
