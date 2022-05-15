import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";

export default function NotFound() {
	const history = useHistory();

	return (
		<Container component={Paper} sx={{ height: 400 }}>
			<Typography gutterBottom variant="h3">
				Oops - we could not find what you are looking for.
			</Typography>
			<Divider />
			<Button fullWidth onClick={() => history.push("/catalog")}>
				Go back to catalog
			</Button>
		</Container>
	);
}
