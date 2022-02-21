import { StyleSheet } from 'react-native';
import { getColor } from '../../Utils/colors';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingTop: 55,
        paddingBottom: 25,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: getColor('primaryGreen'),
    },

    icons: {
        flexDirection: 'row',
    },
});
export default styles;
