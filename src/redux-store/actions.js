export const ADD_WIDGET = 'ADD_WIDGET';
export const REMOVE_WIDGET = 'REMOVE_WIDGET';
export const SEARCH_WIDGETS = 'SEARCH_WIDGETS';

export const addWidget = (categoryId, widget) => ({
    type: ADD_WIDGET,
    payload: { categoryId, widget }
});

export const removeWidget = (categoryId, widgetId) => ({
    type: REMOVE_WIDGET,
    payload: { categoryId, widgetId }
});

export const searchWidgets = (searchTerm) => ({
    type: SEARCH_WIDGETS,
    payload: searchTerm
});

export const setCategories = (categories) => ({
    type: "SET_CATEGORIES",
    payload: categories,
});
