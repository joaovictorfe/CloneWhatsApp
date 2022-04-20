import React, { memo, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import GreenButton from '../../Components/Buttons/GreenButton';
import styles from './styles';
import { auth } from '../../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const cadastro = () => {
        console.log(email);
        if (email && password) {
            createUserWithEmailAndPassword(auth, email, password)
                .then(userCredential => {
                    console.log('user:', userCredential);
                    const user = userCredential.user;
                    // ...
                })
                .catch(error => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log('erro:', error);
                });
        }
    };

    return (
        <View style={styles.container}>
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
            <View style={{ height: 10 }} />
            <GreenButton title="Cadastrar" action={() => cadastro()} />
        </View>
    );
};
export default memo(Signup);
