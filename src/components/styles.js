import styled from "styled-components";

export const Form = styled.form`
  + form {
    margin-top: 40px;
  }

  button {
    margin-top: 14px;
    width: 100%;
  }
`;

export const FieldSet = styled.fieldset`
  + fieldset {
    margin-top: 20px;
  }
`;

export const Span = styled.span`
  font-size: 12px;
  padding: 10px;
`;

export const Table = styled.table`
  padding: 10px;
  flex-shrink: 0;
  flex-grow: 1;

  td {
    text-align: center;
  }
`;
