import { StyleSheet } from 'react-native';
import { getColor } from './colors';

const globalStyles = StyleSheet.create({
    title: {
        color: getColor('pureWhite'),
        fontSize: 18,
        fontWeight: '700',
    },

    subText: {
        color: getColor('subText'),
        fontSize: 16,
        fontWeight: '400',
    },
});
export default globalStyles;
