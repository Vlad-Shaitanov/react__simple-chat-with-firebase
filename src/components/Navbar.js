import React, {useContext} from "react";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/consts";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Button, Grid } from "@material-ui/core";

export const Navbar = () => {

//Залогинен юзер или нет
	const {auth} = useContext(Context);//Вытаскиваем из контекста
	const [user] = useAuthState(auth);

	return (
		<AppBar position="static">
			<Toolbar variant={"dense"}>
				<Grid container justifyContent={"flex-end"}>
					{user ? (
						<Button
							onClick={() => auth.signOut()}//Функция для выхода из профиля
							variant={"outlined"}

						>Выйти</Button>
					) : (
						<NavLink to={LOGIN_ROUTE}>
							<Button variant={"outlined"}>Логин</Button>
						</NavLink>
					)}
				</Grid>
			</Toolbar>
		</AppBar>
	);
};