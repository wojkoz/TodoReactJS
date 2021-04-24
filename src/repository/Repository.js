import {loadFromLocalStorage, saveToLocalStorage} from './LocalRepository'
import TodoModel from '../models/TodoModel'

export const addItem = (title, desc, isUserLogged) => {
    if(isUserLogged){
        //todo: add api integration
        return [];
    }else{
        const newItem = new TodoModel(title, desc);
        
        const list = loadFromLocalStorage();
        
        const updatedList = [...list, newItem];

        saveToLocalStorage(updatedList);

        return updatedList;
    }
}

export const deleteItem = (id, isUserLogged) => {
    if(isUserLogged){
        //Todo: add api integration
        return [];
    }else{
        const list = loadFromLocalStorage();
        const updatedList = list.filter((item) => item.id !== id);
        saveToLocalStorage(updatedList);

        return updatedList;
    }
}

export const getItems = (isUserLogged) => {
    if(isUserLogged){
        //Todo: add api integration
        return [];
    }else{
        return loadFromLocalStorage();
    }
}