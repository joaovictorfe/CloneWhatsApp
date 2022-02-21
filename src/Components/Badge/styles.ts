import { StyleSheet } from 'react-native';
import { getColor } from '../../Utils/colors';

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 7,
        paddingVertical: 3,
        backgroundColor: getColor('primaryGreen'),
    },

    title: {
        fontSize: 10,
        fontWeight: '400',
        color: getColor('bgBlack'),
    },
});
export default styles;
