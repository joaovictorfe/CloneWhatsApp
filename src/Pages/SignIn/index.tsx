import { useNavigation } from '@react-navigation/native';
import React, { memo, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { auth } from '../../config/firebase';
import GreenButton from '../../Components/Buttons/GreenButton';
import Icons from '../../Components/Icons';
import styles from './styles';
import { signInWithEmailAndPassword } from 'firebase/auth';

const SignIn = () => {
    const navigator = useNavigation();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const signIn = () => {
        if (email && password) {
            signInWithEmailAndPassword(auth, email, password)
                .then(({ user }) => auth.updateCurrentUser(user))
                .catch(error => console.log(error));
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

            <Text style={styles.title}>Entre com seu e-mail e senha:</Text>

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

            <GreenButton title="Entrar" action={() => signIn()} />
        </View>
    );
};
export default memo(SignIn);
