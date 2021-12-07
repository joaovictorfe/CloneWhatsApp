import { StyleSheet } from 'react-native';
import { getColor } from './colors';

const globalStyles = StyleSheet.create({
    title: {
        color: getColor('pureWhite'),
        fontSize: 18,
        fontWeight: '600',
    },

    subText: {
        color: getColor('subText'),
        fontSize: 14,
        fontWeight: '400',
    },
});
export default globalStyles;
