import { StyleSheet } from 'react-native';
import { getColor } from '../../../Utils/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: getColor('darkGreen'),
        borderRadius: 4,
        padding: 10,
        alignItems: 'center',
        marginBottom: 20,
    },

    title: {
        color: getColor('lowGray'),
        fontSize: 18,
        fontWeight: '600',
    },
});
export default styles;
