import { StyleSheet } from 'react-native';
import { heightPercent, widthPercent } from '../../utils/display.utils';

export default StyleSheet.create({
    container: {
        height: heightPercent(100),
        width: widthPercent(100),
        backgroundColor: '#ffffff',
    },
    content: {
        flexGrow: 1,
        maxHeight: heightPercent(100),
        backgroundColor: '#ffffff',
        paddingTop: 20,
        paddingBottom: 20,
        paddingHorizontal: 20,
    },
    buttonContainer: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#888888',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    searchText: {
        color: '#2E384D',
        marginLeft: 5,
    },
    closeButton: {
        position: 'absolute',
        right: 10,
        top: 10,
        backgroundColor: '#aaaaaa',
        borderRadius: 50,
        padding: 5,
    },
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#2E384D',
    },
    inputContainer: {
        marginTop: 20,
        paddingHorizontal: 20,
    }
});
