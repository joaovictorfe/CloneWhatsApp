import { useNavigation } from '@react-navigation/native';
import React, { memo } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import globalStyles from '../../Utils/globalStyles';
import Icons from '../Icons';
import styles from './styles';

type Props = {
    source: string;
    userName: string;
};

const ChatHeader = ({ source, userName }: Props) => {
    const navigator = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={1}
                style={styles.back}
                onPress={() => navigator.goBack()}>
                <Icons
                    name="arrowLeft"
                    size={28}
                    color="white"
                    onPress={() => navigator.goBack()}
                    style={{ paddingLeft: 10 }}
                />
                <Image style={styles.image} source={{ uri: source }} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log('perfil')}>
                <Text
                    style={[globalStyles.title, styles.name]}
                    numberOfLines={1}>
                    {userName}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log('opções')}>
                <Icons name="threeDots" size={32} color="white" />
            </TouchableOpacity>
        </View>
    );
};
export default memo(ChatHeader);
