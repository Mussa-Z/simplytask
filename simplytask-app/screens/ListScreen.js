import { StyleSheet, View, Text, Button } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../common/theme-context';



export function ListScreen( { route, navigation }) {
  const {theme, setTheme} = useContext(ThemeContext);
  const listName = route.params.listName;
  return (
    <View style={[styles.container, { backgroundColor: theme.background}]}>
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
        alignItems: 'center',
        justifyContent: 'center',
    },
});