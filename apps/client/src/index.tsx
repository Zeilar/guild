import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<ThemeProvider theme={theme}>
		<GlobalStyles />
		<App />
	</ThemeProvider>
);
