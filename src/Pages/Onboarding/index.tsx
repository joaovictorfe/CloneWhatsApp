import React, { memo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, StatusBar } from 'react-native';
import styles from './styles';
import backgroundChatImage from '../../assets/images/index';
import GreenButton from '../../Components/Buttons/GreenButton';
import { getColor } from '../../Utils/colors';

const Onboarding = () => {
    const navigator = useNavigation();

    return (
        <>
            <StatusBar backgroundColor={getColor('bgAuthenticationFlow')} />
            <View style={styles.container}>
                <Text style={styles.welcomeText}>Bem-Vindo ao WhatsApp</Text>

                <Image source={backgroundChatImage} style={styles.image} />

                <View style={styles.logOptions}>
                    <GreenButton
                        title="ENTRAR"
                        action={() => navigator.navigate('SignIn')}
                    />
                    <GreenButton
                        title="CADASTRE-SE"
                        action={() => navigator.navigate('SignUp')}
                    />
                </View>
            </View>
        </>
    );
};
export default memo(Onboarding);
