import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useContext } from 'react';
import { ListName } from '../components/ListComponents';
import { ListDataContext } from '../common/list-context';

export function ListsDrawerContent(props) {

  const {listData, setListData} = useContext(ListDataContext);

  return(
    <DrawerContentScrollView {...props}>
      {listData.map((element, index) => (
        <ListName
          key={index}
          name={element}
          navigation={props.navigation}
        ></ListName>
      ))}
    </DrawerContentScrollView>
  );
}
