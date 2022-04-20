import { StyleSheet } from 'react-native';
import { getColor } from '../../Utils/colors';
import { deviceWidth } from '../../Utils/dimensions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: getColor('bgAuthenticationFlow'),
        alignItems: 'center',
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
        marginHorizontal: 10,
        backgroundColor: getColor('white'),
        height: 38,
        width: deviceWidth * 0.8,
        marginBottom: 20,
        padding: 10,
        fontSize: 18,
        color: '#222',
        fontWeight: '500',
        justifyContent: 'center',
    },
});
export default styles;
