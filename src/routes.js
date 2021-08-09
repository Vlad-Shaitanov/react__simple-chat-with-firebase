import {CHAT_ROUTE, LOGIN_ROUTE} from "./utils/consts";
import {Login} from "./components/Login";
import {Chat} from "./components/Chat";

//В объектах описаны пути и компоненты, которые должны по ним отрисоваться
export const publicRoutes = [
	{
		/*Включает все маршруты, доступные пользователю,
        даже если он не авторизован*/
		path: LOGIN_ROUTE,
		//Компонент, который должен отрисовываться по этому пути
		Component: Login,
		id: 1
	}
];

export const privateRoutes = [
	{
		/*Маршруты, доступные только авторизованному пользователю*/
		path: CHAT_ROUTE,
		//Компонент, который должен отрисовываться по этому пути
		Component: Chat,
		id: 2
	}
];