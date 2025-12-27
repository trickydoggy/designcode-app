import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import AppNavigator from './navigator/AppNavigator';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';

const httpLink = new HttpLink({
    uri: `https://graphql.contentful.com/content/v1/spaces/7vvbzyk03l3t`,
    headers: {
        Authorization: `Bearer blgpzbSJTTkNM3ZJ1PFnOQaqzCOGXIva4YrV4qySCRA`
    }
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

const initialState = {
    action: "closeMenu",
    name: "Stranger"
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case "closeMenu":
            return {
                ...state,
                action: "closeMenu"
            }
        case "openMenu":
            return {
                ...state,
                action: "openMenu"
            }
        case "UPDATE_NAME":
            return {
                ...state,
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
    <ApolloProvider client={client}>
        <Provider store={store}>
            <AppNavigator />
        </Provider>
    </ApolloProvider>
);

export default App;
