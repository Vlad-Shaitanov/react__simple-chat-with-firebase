import React, {useContext} from "react";
import { Container, Grid, Button} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {Context} from "../index";
import firebase from "firebase";

export const Login = () => {
	const {auth} = useContext(Context);

	const login = async () => {
		//Провайдер авторизации
		const provider = new firebase.auth.GoogleAuthProvider();
		const {user} = await auth.signInWithPopup(provider);
		console.log(user);
	};

	return (
		<Container>
			<Grid
				container
				style={{ height: window.innerHeight - 50 }}
				alignItems={"center"}
				justifyContent={"center"}
			>
				<Grid
					container
					style={{width: 400, background: "lightgrey"}}
					align={"center"}
					direction={"column"}>
					<Box p={5}>
						<Button
							variant={"outlined"}
							onClick={login}
						>Войти с помощью Google</Button>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};
