import "./styles/fonts.css";

export type Theme = typeof theme;

export const theme = {
	palette: {
		primary: "red",
		secondary: "gray",
	},
	typography: {
		brand: {
			fontFamily: "Aventura",
		},
		header: {
			fontFamily: "SemplicitaPro",
		},
		body: {
			fontFamily: "Inter",
		},
	},
};
