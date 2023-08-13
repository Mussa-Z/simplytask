import { StyleSheet, View, TextInput } from 'react-native';
import React, { useRef, useContext } from 'react';
import { ThemeContext } from '../common/theme-context';

export function CreateNewListScreen( { route, navigation }) {

    const textInputRef = useRef();
    const {theme, setTheme} = useContext(ThemeContext);

    const focusOnInput = e => {
        textInputRef.current.focus();
    }

    navigation.addListener("focus", focusOnInput);

    return (
      <View style={[styles.container, {backgroundColor: theme.background}]}>
        <TextInput
            ref={textInputRef} 
            placeholder='Enter list name'
            placeholderTextColor={theme.disabledText}
            style={[styles.inputText, {backgroundColor: theme.cardBackground, color:theme.primaryText}]}
            onChangeText={(text) => {
                navigation.setParams({
                    listName: text
                });
            }}
        />
        {/* <View style={styles.deadZone}></View> */}
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    inputText: {
        width: '100%',
        // borderBottomWidth: 1,
        // borderColor: "#3fa3bd",
        height: 45,
        fontSize: 16,
        textAlign: 'left',
        paddingLeft: 10
    },
    deadZone: {
        width: '100%',
        height: '100%'
    }
});