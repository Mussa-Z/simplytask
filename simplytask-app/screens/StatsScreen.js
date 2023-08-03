import { StyleSheet, View, Text } from 'react-native';

export function StatsScreen( { navigation }) {
    return (
      <View style={styles.container}>
        <Text>Stats Screen</Text>
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
});