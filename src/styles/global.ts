import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Nunito', sans-serif;
    background: ${(props) => props.theme["base-input"]
    };
    color: ${(props) => props.theme["base-text"]};
    -webkit-font-smoothing: antialiased;
    };
  

  a {
    text-decoration: none;
    color: inherit;
  }
 
`;
export default GlobalStyle;