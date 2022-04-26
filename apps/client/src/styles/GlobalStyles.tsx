import "./fonts.css";

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --container-max-width: 70rem;
        --palette-primary: #ff0055;
        --palette-secondary: gray;
        --palette-text: rgb(225, 225, 225);
        --palette-textMuted: rgb(175, 175, 175);
        --palette-border: rgb(50, 50, 50);
        --palette-demon_hunter: rgb(163,48,201);
        --palette-death_knight: rgb(196,30,58);
        --palette-paladin: rgb(244,140,186);
        --palette-warlock: rgb(135,136,238);
        --palette-warrior: rgb(198,155,109);
        --palette-hunter: rgb(170,211,114);
        --palette-priest: rgb(255,255,255);
        --palette-rogue: rgb(255,244,104);
        --palette-druid: rgb(255,124,10);
        --palette-shaman: rgb(0,112,221);
        --palette-mage: rgb(64,199,235);
        --palette-monk: rgb(0,255,152);
        --fontfamily-brand: Aventura;
        --fontfamily-header: SemplicitaPro;
        --fontfamily-body: Inter;
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
        color: var(--palette-text);
        overflow: hidden;
        font-family: var(--fontfamily-body);
    }

    #root {
        --perspective: 10px;
        height: 100vh;
        overflow-y: auto;
        overflow-x: hidden;
        perspective: var(--perspective);
    }

    img {
        user-select: none;
        max-width: 100%;
    }
`;
