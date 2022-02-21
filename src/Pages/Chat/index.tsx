import React, { memo, useRef } from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    Pressable,
    TextInput,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import styles from './styles';
import backgroundChatImage from '../../assets/images/index';
import ChatHeader from '../../Components/ChatHeader';
import Icons from '../../Components/Icons';

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

    return (
        <View style={styles.container}>
            <ImageBackground
                source={{
                    uri: Image.resolveAssetSource(backgroundChatImage).uri,
                }}
                style={styles.bg}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.chat}>
                    <ChatHeader
                        source={route.params.source}
                        userName={route.params.userName}
                    />

                    <View style={styles.messages}>
                        <ScrollView keyboardDismissMode="none"></ScrollView>
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
                                placeholder="Mensagem"
                                style={styles.input}
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
                        <Pressable style={styles.audio}></Pressable>
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        </View>
    );
};
export default memo(Chat);
