import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

    html {
        background: linear-gradient(90deg, #2880D8 0%, #AC73CF 50%, #EE68A4 100%);
        min-width: 100vw;
        min-height: 100vh;

        overflow-y: scroll;
    }

    body {
        min-width: 1280px;
        max-width: 1440px;
        margin: 0 auto;
    }

    * { 
        font-family: 'Spoqa Han Sans Neo', 'sans-serif' !important; 
        
    }
`;

export default GlobalStyle;
