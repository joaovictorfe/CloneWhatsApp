import { StyleSheet } from 'react-native';
import { getColor } from '../../Utils/colors';
import { deviceWidth } from '../../Utils/dimensions';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        maxWidth: deviceWidth * 0.8,
        marginLeft: 10,
        marginTop: 5,
    },

    textBox: {
        backgroundColor: getColor('headerBg'),
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },

    text: {
        color: getColor('pureWhite'),
        fontSize: 18,
    },

    timeStatus: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 3,
        right: 8,
    },

    time: {
        paddingRight: 5,
        alignSelf: 'flex-end',
        color: getColor('lowGray'),
    },
});
export default styles;
