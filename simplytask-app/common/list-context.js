// global contexts for list and list data so that all components can access
// the currently active list and ALL list data including tasks

import {createContext} from "react";

export const ListContext = createContext({
    currentList: {},
    setCurrentList: () => {},
});

export const ListDataContext = createContext({
    listData: [],
    setListData: () => {},
});