import { StyleSheet } from 'react-native';
import { getColor } from '../../utils/colors';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        marginTop: -15,
        paddingHorizontal: 20,
        backgroundColor: getColor('lowDarkGreen'),
    },

    camera: {
        marginRight: 20,
    },

    optionsOrganization: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
export default styles;
