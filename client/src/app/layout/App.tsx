import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { Container, CssBaseline } from "@mui/material";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";
import { useState } from "react";

function App() {
	const [darkMode, setDarkMode] = useState(false);

	const paletteType = darkMode ? "dark" : "light";

	const theme = createTheme({
		palette: {
			mode: paletteType,
			background: {
				default: paletteType === "light" ? "#eaeaea" : "#121212",
			},
		},
	});

	function handleThemeChange() {
		setDarkMode(!darkMode);
	}

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
			<Container>
				<Catalog />
			</Container>
		</ThemeProvider>
	);
}

export default App;