import React, { memo, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import GreenButton from '../../Components/Buttons/GreenButton';
import styles from './styles';
import { auth } from '../../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Icons from '../../Components/Icons';
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
    const navigator = useNavigation();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const signUp = () => {
        console.log(email);
        if (email && password) {
            createUserWithEmailAndPassword(auth, email, password)
                .then(userCredential => {
                    console.log('user:', userCredential);
                })
                .catch(error => {
                    console.log('erro:', error);
                });
        }
    };

    return (
        <View style={styles.container}>
            <Icons
                name="arrowLeft"
                size={28}
                color="white"
                style={styles.icon}
                onPress={navigator.goBack}
            />

            <Text style={styles.title}>
                Insira um e-mail e senha válidos para cadastro:
            </Text>

            <TextInput
                onChangeText={text => setEmail(text)}
                style={styles.input}
                numberOfLines={1}
                autoFocus
                blurOnSubmit
                placeholder="email@example.com"
                keyboardType="email-address"
                autoCapitalize="none"
                textContentType="emailAddress"
                autoCompleteType="email"
            />

            <TextInput
                onChangeText={text => setPassword(text)}
                style={styles.input}
                numberOfLines={1}
                blurOnSubmit
                placeholder="******"
                autoCapitalize="none"
                textContentType="password"
                secureTextEntry
            />

            <GreenButton title="Cadastrar" action={() => signUp()} />
        </View>
    );
};
export default memo(Signup);
