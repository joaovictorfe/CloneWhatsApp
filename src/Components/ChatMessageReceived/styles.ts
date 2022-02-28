import { StyleSheet } from 'react-native';
import { getColor } from '../../Utils/colors';
import { deviceWidth } from '../../Utils/dimensions';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        maxWidth: deviceWidth * 0.8,
        marginHorizontal: 10,
        marginTop: 5,
    },

    textBox: {
        backgroundColor: getColor('headerBg'),
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        padding: 5,
        paddingHorizontal: 10,
    },

    text: {
        color: getColor('pureWhite'),
        fontSize: 18,
    },

    time: {
        alignSelf: 'flex-end',
        color: getColor('lowGray'),
    },
});
export default styles;
