import { StyleSheet } from 'react-native';
import { getColor } from '../../Utils/colors';

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
        backgroundColor: getColor('lowDarkGreen'),
    },

    title: {
        fontSize: 14,
        fontWeight: '400',
        color: getColor('bgBlack'),
    },
});
export default styles;
