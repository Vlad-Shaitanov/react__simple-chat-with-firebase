import React, {useContext} from "react";
import {Navbar} from "./components/Navbar";
import {BrowserRouter} from "react-router-dom";
import './App.css';
import {AppRouter} from "./components/AppRouter";
import {Context} from "./index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Loader} from "./components/Loader";


const App = () => {
	const {auth} = useContext(Context);//Вытаскиваем из контекста
	const [user, loading, error] = useAuthState(auth);

	//Пока идет загрузка профиля, показываем Спиннер
	if(loading){
		return <Loader />
	}

  return (
    <BrowserRouter>
      <Navbar />
	  <AppRouter />
    </BrowserRouter>
  );
};

export default App;
