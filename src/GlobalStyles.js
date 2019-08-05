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
  table,
  tr,
  td,
  th,
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

  hr {
    margin: 30px 0;
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
    font-size: 14px;
    transition: all .3s ease-in-out;

    &:hover {
      background-color: #333;
      color: #fff;
      cursor: pointer;
    }

    &.delete {
      width: 165px;
      border: 1px solid #b20000;
      color: #fff;
      background-color: #b20000;
    }

    &.delete:hover {
      border: 1px solid #b20000;
      color: #b20000;
      background-color: #fff;
    }
  }

  input {
    border: 1px solid transparent;
    font-size: 14px;
    outline: none;
    padding: 8px;
    transition: all .3s ease-in-out;

    &:focus {
      border: 1px solid #333;
    }
  }

  fieldset {
    border: none;
    padding: 0;
    margin: 0;
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
