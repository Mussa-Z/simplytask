import AsyncStorage from '@react-native-async-storage/async-storage';

export async function saveData(dataType, data){

    const jsonData = JSON.stringify(data);

    switch(dataType) {
        case "theme":
            try {
                await AsyncStorage.setItem('@simplyTaskTheme', jsonData);
            } catch (e) {
                console.log('This error occured when saving theme data: ' + e);
            }
            break;
        case "selectedList":
            try {
                await AsyncStorage.setItem('@simplyTaskList', jsonData);
            } catch (e) {
                console.log('This error occured when saving selected list data: ' + e);
            }
            break;
        case "listsData":
            try {
                await AsyncStorage.setItem('@simplyTaskLists', jsonData);
            } catch (e) {
                console.log('This error occured when saving lists data: ' + e);
            }
            break;
        case "settings":
            try {
                await AsyncStorage.setItem('@simplyTaskSettings', jsonData);
            } catch (e) {
                console.log('This error occured when saving settings data: ' + e);
            }
            break;
    }
}