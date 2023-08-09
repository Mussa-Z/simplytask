import { StyleSheet, View, Text, Button } from 'react-native';

export function DetailsScreen( { navigation }) {
    return(
        <View style={styles.container}>
            <Text>Details Screen</Text>
            <Button 
                title="View details...again"
                onPress={() => navigation.push('Details')}
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
});