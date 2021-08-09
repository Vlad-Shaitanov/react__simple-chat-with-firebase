import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";



// Initialize Firebase
firebase.initializeApp({
	apiKey: "AIzaSyDfO49zl_Yzd_CZXwA00r6Z4ulLVHOUGck",
	authDomain: "react-simple-chat-ffae1.firebaseapp.com",
	projectId: "react-simple-chat-ffae1",
	storageBucket: "react-simple-chat-ffae1.appspot.com",
	messagingSenderId: "55410192147",
	appId: "1:55410192147:web:5cb08cd2149a343b7474e6",
	measurementId: "G-8LCYYRJQTB"
});

//Контекст (в нашем случае данные авторизации)
export const Context = createContext(null);
//Аутентификация
const auth = firebase.auth();
//Хранилище
const firestore = firebase.firestore();

ReactDOM.render(
  <Context.Provider value={{
  	firebase,
	auth,
	firestore
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
