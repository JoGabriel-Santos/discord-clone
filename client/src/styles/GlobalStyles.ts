import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body, html, #root {
    height: 100%;
  }

  *, button, input {
    border: 0;
    font-family: 'Roboto', sans-serif;
    outline: 0;
  }

  :root {
    --primary: #36393f;
    --secondary: #2f3136;
    --tertiary: rgb(32, 34, 37);
    --quaternary: #292b2f;
    --quinary: #393d42;
    --senary: #828386;

    --chat-input: rgb(64, 68, 75);
    --discord: #6e86d6;
    --gray: #8a8c90;
    --home: #6633cc;
    --link: #5d80d6;
    --mention-detail: #f9a839;
    --mention-message: #413f3f;
    --notification: #f84a4b;
    --symbol: #74777a;
    --white: #fff;
  }
`;