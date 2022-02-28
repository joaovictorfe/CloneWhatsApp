import React, { memo, useEffect, useRef, useState } from 'react';
import {
    View,
    Image,
    ImageBackground,
    Pressable,
    TextInput,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
} from 'react-native';
import styles from './styles';
import backgroundChatImage from '../../assets/images/index';
import ChatHeader from '../../Components/ChatHeader';
import Icons from '../../Components/Icons';
import { getColor } from '../../Utils/colors';
import ChatMessageSended from '../../Components/ChatMessageSended';
import ChatMessageReceived from '../../Components/ChatMessageReceived';

type Props = {
    route: {
        params: {
            source: string;
            userName: string;
        };
    };
};

const Chat = ({ route }: Props) => {
    const inputRef = useRef<TextInput>(null);
    const [keyboardUp, setKeyboardUp] = useState(false);

    useEffect(() => {
        Keyboard.addListener('keyboardWillShow', () => {
            setKeyboardUp(true);
        });
        Keyboard.addListener('keyboardWillHide', () => {
            setKeyboardUp(false);
        });

        return () => {
            Keyboard.removeAllListeners('keyboardWillShow');
            Keyboard.removeAllListeners('keyboardWillHide');
        };
    }, []);

    return (
        <View style={styles.container}>
            <ImageBackground
                source={{
                    uri: Image.resolveAssetSource(backgroundChatImage).uri,
                }}
                style={styles.bg}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={[
                        styles.chat,
                        keyboardUp
                            ? { marginBottom: 60 }
                            : { marginBottom: 15 },
                    ]}>
                    <ChatHeader
                        source={route.params.source}
                        userName={route.params.userName}
                    />

                    <View style={styles.messages}>
                        <ScrollView
                            keyboardDismissMode="interactive"
                            keyboardShouldPersistTaps="handled">
                            <ChatMessageSended
                                message="Teste de mensagem"
                                date={new Date()}
                            />
                            <ChatMessageReceived
                                message="Teste de mensagem recebida muito grande para teste"
                                date={new Date()}
                            />
                        </ScrollView>
                    </View>

                    <View style={styles.inputContainer}>
                        <View style={styles.keyboardInputs}>
                            <Icons
                                name="emotes"
                                size={26}
                                color="lowGray"
                                style={{ marginHorizontal: 10 }}
                            />
                            <TextInput
                                ref={inputRef}
                                style={styles.input}
                                placeholder="Mensagem"
                                placeholderTextColor={getColor('lowGray')}
                                multiline
                                scrollEnabled
                                spellCheck
                                autoCapitalize="sentences"
                                autoFocus={true}
                                keyboardAppearance="dark"
                            />
                            <Icons
                                name="clip"
                                size={26}
                                color="lowGray"
                                style={{ marginHorizontal: 15 }}
                            />
                            <Icons
                                name="camera"
                                size={32}
                                color="lowGray"
                                style={{ marginRight: 10 }}
                            />
                        </View>
                        <Pressable style={styles.audio}>
                            {/* {console.log(inputRef.current)} */}
                            <Icons name="mic" size={26} color="lowGray" />
                        </Pressable>
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        </View>
    );
};
export default memo(Chat);
