const TODO_ITEMS_KEY = "TODO_ITEMS";

export const saveToLocalStorage = (items, userName = null) => {
  if (userName === null) {
    localStorage.setItem(TODO_ITEMS_KEY, JSON.stringify(items));
  } else {
    localStorage.setItem(
      `${TODO_ITEMS_KEY}_${userName}`,
      JSON.stringify(items)
    );
  }
};

export const loadFromLocalStorage = (userName = null) => {
  let items = null;

  if (userName === null) {
    items = localStorage.getItem(TODO_ITEMS_KEY);
  } else {
    items = localStorage.getItem(`${TODO_ITEMS_KEY}_${userName}`);
  }

  if (items === null) {
    return [];
  }
  return JSON.parse(items);
};
