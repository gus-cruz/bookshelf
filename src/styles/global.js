import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {font-family: "Intro Book"; src: url("//db.onlinewebfonts.com/t/6a81390447ad72cfbb893f65a5031279.eot"); src: url("//db.onlinewebfonts.com/t/6a81390447ad72cfbb893f65a5031279.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/6a81390447ad72cfbb893f65a5031279.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/6a81390447ad72cfbb893f65a5031279.woff") format("woff"), url("//db.onlinewebfonts.com/t/6a81390447ad72cfbb893f65a5031279.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/6a81390447ad72cfbb893f65a5031279.svg#Intro Book") format("svg"); }
  
  @keyframes delay-to-appear {
    0% { opacity: 0 }
    40% { opacity: 0  }
    100% { opacity: 1  }
  }

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

    &::-webkit-scrollbar-track{
      background-color: ${props => props.theme.colors.border};
    }

    &::-webkit-scrollbar{
      width: 6px;
      background-color: ${props => props.theme.colors.border};
    }

    &::-webkit-scrollbar-thumb{
      background-color: ${props => props.theme.colors.primary};
      border-radius: 20px;
    }

    animation: anti-overflow 3s forwards;

    @keyframes start {
    0% { overflow: hidden }
    80% { overflow: hidden }
    100% { overflow: auto }
    }

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