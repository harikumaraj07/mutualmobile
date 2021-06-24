import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        flexGrow: 1,
        paddingVertical: 20,
        paddingHorizontal: 15,
    },
    headerContainer: {
        marginBottom: 20,
    },
    content: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#2E384D',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    usernameText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#2E384D',
    },
    nameText: {
        marginVertical: 10,
        fontWeight: 'bold',
        color: '#2E384D',
        fontSize: 18,
    },
    infoText: {
        color: '#666666',
        fontSize: 14,
    }
});
