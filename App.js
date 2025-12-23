import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import AppNavigator from './navigator/AppNavigator';

const initialState = {
    action: "openMenu"
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case "closeMenu":
            return {
                action: "closeMenu"
            }
        case "openMenu":
            return {
                action: "openMenu"
            }
        case "UPDATE_NAME":
            return {
                name: action.name
            }
        default:
            return state;
    }
}

const store = configureStore({
    reducer: reducer
});

const App = () => (
    <Provider store={store}>
        <AppNavigator />
    </Provider>
);

export default App;
