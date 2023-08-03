import { View, Button } from 'react-native';

export function ListsDrawerContent({ navigation }) {
    return (
      <View>
        <Button 
          title = "Groceries List"
          onPress={ () => {
            navigation.navigate('List', {listName: 'Groceries List'});
          }}
        />
        <Button 
          title = "Party List"
          onPress={ () => {
            navigation.navigate('List', {listName: 'Party List'});
          }}
        />
        <Button 
          title = "Assignment To Dos"
          onPress={ () => {
            navigation.navigate('List', {listName: 'Assignment To Dos'});
          }}
        />
      </View>
    );
}