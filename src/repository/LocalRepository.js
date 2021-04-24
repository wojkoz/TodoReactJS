const TODO_ITEMS_KEY = "TODO_ITEMS";

export const saveToLocalStorage = (items) => {
    localStorage.setItem(TODO_ITEMS_KEY, JSON.stringify(items));
}

export const loadFromLocalStorage = () => {
    const items = localStorage.getItem(TODO_ITEMS_KEY);

    if(items == null){
        return [];
    }
    return JSON.parse(items);
}