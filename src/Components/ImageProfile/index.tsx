import React, { memo } from 'react';
import { Image, TouchableWithoutFeedback, View } from 'react-native';
import styles from './styles';

type Props = {
    source?: string;
    size?: number;
};

const ImageProfile = ({ source, size }: Props) => {
    return (
        <TouchableWithoutFeedback
            onPress={() => console.log('clique ImagelProfile', source)}>
            <Image
                source={{ uri: source }}
                style={[
                    styles.container,
                    { width: size || 54, height: size || 54 },
                ]}
            />
        </TouchableWithoutFeedback>
    );
};
export default memo(ImageProfile);
