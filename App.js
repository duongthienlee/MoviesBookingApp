
import store from "./src/store"
import { Provider } from 'react-redux';
import React from 'react'
import AppNavigation from "./src/navigation/"
export default class App extends React.Component {
  render() {


    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    )
  }
}