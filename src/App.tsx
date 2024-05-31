import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {store} from "./store";
import AppContainer from "./AppContainer";

function App() {
    const myStore = store;

    return (
        <Provider store={myStore}>
            <AppContainer/>
        </Provider>
    );
}

export default App;
