import { StyleSheet, View, Text } from 'react-native';

export function TopNavBar() {
    return (
        <View style ={styles.topBar}>
            <Text>Avatar Placeholder</Text>
            <Text>Lists</Text>
            <Text>Coins Placeholder</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    topBar: {
      backgroundColor: '#DDCECE', // DEBUG: 'red'
      height: 65,
      flexDirection: 'row',
      alignItems: 'center',
    },
});