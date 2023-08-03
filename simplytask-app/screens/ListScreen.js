import { StyleSheet, View, Text, Button } from 'react-native';

export function ListScreen( { route, navigation }) {
    const listName = route.params.listName;
    return (
      <View style={styles.container}>
        <Text>{listName}</Text>
        <Button 
          title="View details"
          onPress={() => navigation.navigate('Details')}
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