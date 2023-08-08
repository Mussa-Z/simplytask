import {createContext} from "react";

export const ListContext = createContext({
    currentList: '',
    setCurrentList: () => {},
});

export const ListDataContext = createContext({
    listData: [],
    setListData: () => {},
});