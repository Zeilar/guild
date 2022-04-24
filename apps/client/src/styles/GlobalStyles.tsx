import { createGlobalStyle, css } from "styled-components";
import { Theme } from "../theme";

export const GlobalStyles = createGlobalStyle`
    :root {
        --container-gutters: 20rem; 
        --palette-primary: #ff0055;
        --palette-secondary: gray;
        --palette-text: white;
        --palette-textMuted: rgb(175, 175, 175);
        --palette-border: rgb(50, 50, 50);
        --breakpoint-mobile: 768px;
        --breakpoint-tablet: 1024px;
        --fontfamily-brand: Aventura;
        --fontfamily-header: SemplicitaPro;
        --fontfamily-body: Inter;
        ${({ theme }: { theme: Theme }) => css`
			font-family: ${theme.typography.brand.fontFamily};
			@media (max-width: ${theme.breakpoints.mobile}) {
				--container-gutters: 1rem;
			}
		`}
    }

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style-type: none;
    }

    ::selection {
        background-color: var(--palette-primary);
        color: var(--palette-text);
    }
    
    body {
        background-color: rgb(10, 10, 10);
        color: white;
        overflow-x: hidden;
        font-family: var(--fontfamily-body);
    }

    img {
        user-select: none;
    }
`;
