import { StyleSheet } from 'react-native';
import { getColor } from '../../Utils/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: getColor('bgAuthenticationFlow'),
        paddingHorizontal: 25,
    },

    icon: {
        marginTop: 15,
    },

    title: {
        color: getColor('primaryGreen'),
        fontSize: 24,
        fontWeight: '500',
        marginVertical: 30,
        textAlign: 'center',
    },

    input: {
        borderRadius: 4,
        backgroundColor: getColor('white'),
        height: 38,
        marginBottom: 20,
        padding: 10,
        fontSize: 18,
        color: '#222',
        fontWeight: '500',
        justifyContent: 'center',
    },
});
export default styles;
