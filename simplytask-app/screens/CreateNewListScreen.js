import { StyleSheet, View, TextInput } from 'react-native';
import React, { useRef } from 'react';

export function CreateNewListScreen( { route, navigation }) {

    const textInputRef = useRef();

    const focusOnInput = e => {
        textInputRef.current.focus();
    }

    navigation.addListener("focus", focusOnInput);

    return (
      <View style={styles.container}>
        <TextInput
            ref={textInputRef} 
            placeholder='Enter list name'
            style={styles.inputText}
            onChangeText={(text) => {
                navigation.setParams({
                    listName: text
                });
            }}
        />
        <View style={styles.deadZone}></View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    inputText: {
        width: '100%',
        // borderBottomWidth: 1,
        // borderColor: "#3fa3bd",
        height: 45,
        fontSize: 16,
        backgroundColor: "white",
        textAlign: 'left',
        paddingLeft: 10
    },
    deadZone: {
        backgroundColor: 'lightgrey',
        width: '100%',
        height: '100%'
    }
});