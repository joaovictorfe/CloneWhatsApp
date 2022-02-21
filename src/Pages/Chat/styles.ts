import { StyleSheet } from 'react-native';
import { getColor } from '../../Utils/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    bg: {
        flex: 1,
        width: '100%',
        height: '100%',
    },

    chat: {
        flex: 1,
    },

    messages: {
        flex: 1,
    },

    inputContainer: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },

    keyboardInputs: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: '90%',
        backgroundColor: getColor('headerBg'),
        borderRadius: 20,
        marginLeft: 5,
    },

    audio: {
        height: 52,
        width: 52,
        borderRadius: 26,
        backgroundColor: getColor('secondaryGreen'),
        marginHorizontal: 5,
    },

    input: {
        flex: 1,
    },
});
export default styles;
