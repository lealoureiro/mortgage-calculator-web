import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
  }

  body {
    background-color: #f0f0f0;
  }

  body,
  html,
  p,
  label,
  ul,
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style-type: none;
  }

  label {
    display: block;
  }

  button {
    appearance: none;
    background: none;
    border: 1px solid #333;
    outline: none;
    padding: 5px 12px;
    transition: all .3s ease-in-out;

    &:hover {
      background-color: #333;
      color: #fff;
      cursor: pointer;
    }
  }

  input {
    border: 1px solid transparent;
    outline: none;
    transition: all .3s ease-in-out;

    &:focus {
      border: 1px solid #333;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance:textfield; /* Firefox */
  }

  a {
    text-decoration: none;
  }
`;
