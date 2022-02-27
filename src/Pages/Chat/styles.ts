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
        justifyContent: 'space-between',
    },

    messages: {
        flex: 1,
    },

    inputContainer: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap-reverse',
    },

    keyboardInputs: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: getColor('headerBg'),
        borderRadius: 26,
        marginLeft: 5,
    },

    audio: {
        height: 52,
        width: 52,
        borderRadius: 26,
        backgroundColor: getColor('secondaryGreen'),
        marginHorizontal: 5,
        alignItems: 'center',
        alignSelf: 'flex-start',
        justifyContent: 'center',
    },

    input: {
        flex: 1,
        color: getColor('white'),
        height: '90%',
        maxHeight: 100,
        marginVertical: 15,
        alignSelf: 'flex-end',
    },
});
export default styles;
