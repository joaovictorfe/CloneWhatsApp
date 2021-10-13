import { StyleSheet } from 'react-native';
import { getColor } from '../../Utils/colors';
import { deviceWidth } from '../../Utils/dimensions';

const styles = StyleSheet.create({
    container: {
        backgroundColor: getColor('bgBlack'),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },

    informations: {
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    chatInfos: {
        maxWidth: deviceWidth - 158,
        paddingLeft: 15,
        justifyContent: 'center',
    },

    hourNotification: {
        alignItems: 'center',
    },

    date: {
        alignSelf: 'stretch',
        marginBottom: 5,
    },

    hour: {
        textAlign: 'right',
    },
});
export default styles;
