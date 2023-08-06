import { StyleSheet, View, TextInput } from 'react-native';

export function CreateNewListScreen( { route, navigation }) {
    return (
      <View style={styles.container}>
        <TextInput 
            placeholder='Enter list name'
            style={styles.inputText}
            // onChangeText={(text) => {
            //     taskNameRef.current = text;
            // }}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputText: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#3fa3bd",
        height: 30,
        fontSize: 16,
        backgroundColor: "white",
        textAlign: 'center' 
      }
});