import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  :root {
    --bg: #444;
    --text: #fff;
    --completed: rgb(30 120 30);
    --remove: rgb(220 50 50);
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }  
  body {
    background: var(--bg);
    color: var(--text);
    font-family: sans-serif;
    font-size: 24px;
    padding-inline: 4px;

  }
  ul, ol {
    list-style: none;
  }
  header {
    text-align: center;
    margin-block: 20px;
  }
`
export default Global;