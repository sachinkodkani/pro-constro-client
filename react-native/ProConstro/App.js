import React, { Component } from "react";
import { Provider } from "react-redux";
import store from './src/features/store';
import LoginTypeSelectionScreen from "./src/features/login/LoginTypeSelectionScreen";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <LoginTypeSelectionScreen />
      </Provider>
    );
  }
}


