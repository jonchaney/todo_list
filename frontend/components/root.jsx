import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';

const Root = ({store}) => (
  <Provider store={store}>
    <App />
  </Provider>
);


// document.addEventListener("DOMContentLoaded", () => {
// 	ReactDOM.render(
// 		<App />,
// 		document.getElementById('content')
// 	);
// });



export default Root;
