import React, { memo, useState } from 'react';
import {
    View,
    Text,
    NativeSyntheticEvent,
    TextLayoutEventData,
} from 'react-native';
import { IMessages } from '../../data/Messages/IMessages';
import { deviceWidth } from '../../Utils/dimensions';
import Icons from '../Icons';
import styles from './styles';

const ChatMessageSended = ({
    message,
    date,
    status,
    firstMessage,
}: IMessages) => {
    const [paddingBot, setPaddingBot] = useState(0);
    const [paddingRight, setPaddingRight] = useState(0);

    const handleMessageStyle = (
        e: NativeSyntheticEvent<TextLayoutEventData>,
    ): void => {
        let lines = e.nativeEvent.lines.length; // quantidade de linhas do texto
        let messageMaxWidthWithHour = deviceWidth * 0.8 - 85; // tamanho máximo da mensagem de uma linha com a hora na frente
        const textWidthLastLine = e.nativeEvent.lines.slice(-1)[0].width; // tamanho do texto na última linha

        if (lines == 1) {
            if (textWidthLastLine < messageMaxWidthWithHour) {
                setPaddingRight(65);
            } else {
                setPaddingBot(15);
            }
        } else {
            if (textWidthLastLine > messageMaxWidthWithHour) {
                setPaddingBot(15);
            }
        }
    };

    return (
        <View style={styles.container}>
            <View
                style={[
                    styles.textBox,
                    firstMessage
                        ? null
                        : { borderTopRightRadius: 8, marginRight: 19 },
                ]}>
                <Text
                    style={[
                        styles.text,
                        {
                            paddingBottom: paddingBot,
                            paddingRight: paddingRight,
                        },
                    ]}
                    onTextLayout={e => handleMessageStyle(e)}>
                    {message}
                </Text>
                <View style={styles.timeStatus}>
                    <Text style={styles.time}>
                        {String(date.getHours()).padStart(2, '0')}:
                        {String(date.getMinutes()).padStart(2, '0')}
                    </Text>
                    <Icons name={status} size={16} color="blue" />
                </View>
            </View>
            {firstMessage && (
                <Icons
                    name="chatBorderRight"
                    size={24}
                    color="secondaryGreen"
                    style={{ marginLeft: -5 }}
                />
            )}
        </View>
    );
};
export default memo(ChatMessageSended);
