import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';

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
        default:
            return state;
    }
}

const store = configureStore({
    reducer: reducer
});

const App = () => (
    <Provider store={store}>
        <HomeScreen />
    </Provider>
);

export default App;
