import { StyleSheet } from 'react-native';
import { getColor } from '../../Utils/colors';
import { deviceWidth } from '../../Utils/dimensions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: getColor('bgAuthenticationFlow'),
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    welcomeText: {
        color: getColor('primaryGreen'),
        fontSize: 30,
        fontWeight: '500',
    },

    image: {
        width: deviceWidth / 2,
        height: deviceWidth / 2,
        borderRadius: deviceWidth / 4,
    },

    logOptions: {
        width: '100%',
        height: 120,
        padding: 25,
        justifyContent: 'space-between',
    },
});
export default styles;
