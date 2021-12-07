import { StyleSheet } from 'react-native';
import { getColor } from '../../utils/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    chats: {
        flex: 1,
        backgroundColor: getColor('pureWhite'),
    },
});
export default styles;
