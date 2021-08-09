import React, {useContext} from "react";
import {privateRoutes, publicRoutes} from "../routes";
import {Switch, Route, Redirect} from "react-router-dom";
import {CHAT_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";

export const AppRouter = () => {
	//Залогинен юзер или нет
	const {auth} = useContext(Context);//Вытаскиваем из контекста
	const [user] = useAuthState(auth);

	console.log(user);
	/*Switch группирует все роуты и, если ни один не выполнился
  выполняет последний
  Пробегаем по массиву с приватными роутами. Затем отрисовываем
  компонент Route. Как пусть указываем path и Component как компонент
  для отрисовки.
  exact={true} - компонент отрисуется по строго указанному пути.
  Redirect нужен для того, что юзера вызвращало на нужную страницу,
  если он пройдет по несуществующему пути*/

	return (
		user ?
			(<Switch>
				{privateRoutes.map(({path, Component, id}) => (
					<Route path={path} component={Component} exact={true} key={id} />
					))}
				<Redirect to={CHAT_ROUTE}/>
			</Switch>)
			:
			(<Switch>
				{publicRoutes.map(({path, Component, id}) => (
					<Route path={path} component={Component} exact={true} key={id} />
				))}
				<Redirect to={LOGIN_ROUTE}/>
			</Switch>)
	);
};
