import { StyleSheet } from 'react-native';
import { getColor } from '../../Utils/colors';
import { deviceWidth } from '../../Utils/dimensions';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        backgroundColor: getColor('headerBg'),
    },

    back: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
    },

    image: {
        width: 42,
        height: 42,
        borderRadius: 21,
    },

    name: {
        width: deviceWidth - 134,
    },
});
export default styles;
