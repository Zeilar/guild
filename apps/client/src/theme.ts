import "./styles/fonts.css";

export type Theme = typeof theme;

export const theme = {
	palette: {
		primary: "red",
		secondary: "gray",
		textMuted: "rgb(200, 200, 200)",
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
	breakpoints: {
		mobile: "768px",
		tablet: "1024px",
	},
};
