import { StyleSheet } from 'react-native';
import { getColor } from '../../utils/colors';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingTop: 55,
        paddingBottom: 25,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: getColor('lowDarkGreen'),
    },

    icons: {
        flexDirection: 'row',
    },
});
export default styles;
