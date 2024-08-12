import { ADD_WIDGET, REMOVE_WIDGET, SEARCH_WIDGETS } from './actions';

// mock data in json
const initialState = {
    categories: [
        {
            id: 1,
            name: "CSPM Executive Dashboard",
            widgets: [
                { id: 1, name: "Cloud Accounts", content: "a unique Portal account assigned to a Cloud User, which is necessary for use of the Cloud Products, and used for purposes of management and billing associated with one or more Cloud Products." },
                { id: 2, name: "Cloud Account Risk Assessment", content: "A cloud security risk assessment is an analysis of an organization's cloud infrastructure to determine its security posture. This is a critical process for any organization operating out of the cloud to better understand present risks and determine gaps in security coverage." },
            ]
        },
        {
            id: 2,
            name: "CWPP Dashboard",
            widgets: [
                { id: 3, name: "Top 5 Namespace Specific Alerts", content: "Random text for Widget 3" },
                { id: 4, name: "Workload Alerts", content: "Random text for Widget 4" },
            ]
        },
        {
            id: 3,
            name: "Registry Scan",
            widgets: [
                { id: 5, name: "Image Risk Assessment", content: "Random text for Widget 5" },
                { id: 6, name: "Image Security Issues", content: "Random text for Widget 6" },
            ]
        },
    ],
    searchTerm: ''
};

// Reducer
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_WIDGET:
            return {
                ...state,
                categories: state.categories.map(category =>
                    category.id === action.payload.categoryId
                        ? { ...category, widgets: [...category.widgets, action.payload.widget] }
                        : category
                )
            };
        case REMOVE_WIDGET:
            return {
                ...state,
                categories: state.categories.map(category =>
                    category.id === action.payload.categoryId
                        ? { ...category, widgets: category.widgets.filter(widget => widget.id !== action.payload.widgetId) }
                        : category
                )
            };
        case SEARCH_WIDGETS:
            return {
                ...state,
                searchTerm: action.payload
            };
        default:
            return state;
    }
};

export default rootReducer;