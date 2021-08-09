import React, {useContext, useState} from "react";
import {Context} from "../index";
import firebase from "firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import {useCollectionData} from "react-firebase-hooks/firestore";//Управление данными из базы
import {Grid, Container, Avatar} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Loader} from "./Loader";

export const Chat = () => {
	//Залогинен юзер или нет
	const {auth, firestore} = useContext(Context);//Вытаскиваем из контекста
	const [user] = useAuthState(auth);
	const [value, setValue] = useState("");//Состояние инпута
	const [messages, loading] = useCollectionData(
		firestore.collection("messages").orderBy("createdAt")
	);

	//Отправка сообщений
	const sendMessage = async () => {
		firestore.collection("messages").add({
			uid: user.uid, //id пользователя
			displayName: user.displayName, //Имя пользователя
			photoURL: user.photoURL, //Фото из профиля пользователя
			text: value, //Значение из инпута
			createdAt: firebase.firestore.FieldValue.serverTimestamp() //Серверное время в м/с
		});
		//После отправки сообщения очищаем состояние
		setValue("");
	};

	if(loading){
		return <Loader />
	}

	return (
		<Container>
			<Grid
				container
				justifyContent={"center"}
				style={{ height: window.innerHeight - 50, marginTop: 5 }}
			>
				<div style={{width: "80%", height: "60vh", border: "1px solid blue", overflowY: "auto"}}>
					{messages.map(message =>
						<div  style={{
							margin: 10,
							border: user.uid === message.uid ? "2px solid green" : "2 px solid blue",
							marginLeft: user.uid === message.uid ? "auto" : "10px",
							width: "fit-content",
							padding: 5
							}}>
							<Grid container>
								<Avatar src={message.photoURL}/>
								<div>{message.displayName}</div>
								{/*<div>{message.createdAt}</div>*/}
							</Grid>
							<div>{message.text}</div>
						</div>
					)}
				</div>
				<Grid
					container
					direction={"column"}
					alignItems={"flex-end"}
					style={{width: "80%"}}
				>
					<TextField
						variant={"outlined"}
						fullWidth
						rowsMax={2}
						value={value}
						onChange={e => setValue(e.target.value)}
					/>
					<Button
						variant={"outlined"}
						onClick={sendMessage}
					>Отправить</Button>
				</Grid>
			</Grid>
		</Container>
	);
};