import { StyleSheet, View, Text } from 'react-native';

export function RewardsScreen( { navigation }) {
    return (
      <View style={styles.container}>
        <Text>Rewards Screen</Text>
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