import React, { memo } from 'react';
import { View, Text } from 'react-native';
import Icons from '../Icons';
import styles from './styles';

type Props = {
    message: string;
    date: Date;
};

const ChatMessageSended = ({ message, date }: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.textBox}>
                <Text style={styles.text}>{message}</Text>
                <Text style={styles.time}>
                    {date.getHours()}:{date.getMinutes()}
                </Text>
            </View>
            <Icons
                name="chatBorderRight"
                size={24}
                color="secondaryGreen"
                style={{ marginLeft: -5 }}
            />
        </View>
    );
};
export default memo(ChatMessageSended);
