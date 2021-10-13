import React, { memo } from 'react';
import { Image, TouchableWithoutFeedback, View } from 'react-native';
import styles from './styles';

type Props = {
    source?: string;
    size: number;
};

const ImageProfile = ({ source, size }: Props) => {
    return (
        <TouchableWithoutFeedback
            onPress={() => console.log('clique ImagelProfile')}>
            <View style={[styles.container, { height: size, width: size }]}>
                {source ? <Image source={{ uri: source }} /> : <></>}
            </View>
        </TouchableWithoutFeedback>
    );
};
export default memo(ImageProfile);
