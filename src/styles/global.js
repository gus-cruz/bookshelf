import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {font-family: "Intro Book"; src: url("//db.onlinewebfonts.com/t/6a81390447ad72cfbb893f65a5031279.eot"); src: url("//db.onlinewebfonts.com/t/6a81390447ad72cfbb893f65a5031279.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/6a81390447ad72cfbb893f65a5031279.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/6a81390447ad72cfbb893f65a5031279.woff") format("woff"), url("//db.onlinewebfonts.com/t/6a81390447ad72cfbb893f65a5031279.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/6a81390447ad72cfbb893f65a5031279.svg#Intro Book") format("svg"); }
  
  * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
      text-decoration: none;
  }

  body {
    transition: 0.4s;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text.regular};
  }

  button {
      cursor: pointer;
  }
  
  body, input, button {
    font-family: Intro Book;
  }

  ::selection {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text.regular};
    text-shadow: none;
}

::-moz-selection {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text.regular};
    text-shadow: none;
}

`;