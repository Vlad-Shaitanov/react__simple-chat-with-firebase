import React from "react";
import { Container, Grid} from "@material-ui/core";
import CircularProgress from '@material-ui/core/CircularProgress';

export const Loader = () => {

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
					alignItems={"center"}
					direction={"column"}>
					<CircularProgress />
				</Grid>
			</Grid>
		</Container>
	);
};