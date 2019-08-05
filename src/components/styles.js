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

  label {
    font-size: 14px;
    margin-bottom: 4px;
  }
`;

export const StyledInterestTierInput = styled.div`
  padding: 10px 0;

  + div {
    margin-top: 20px;
    border-top: 1px solid #333;
  }
`;

export const Span = styled.span`
  font-size: 10px;
  padding: 10px;
`;

export const TableWrapper = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  max-height: 768px;
  overflow-y: scroll;
  padding: 20px;
`;

export const Table = styled.table`
  tr {
    padding: 5px 0;
  }

  td {
    text-align: center;
    padding: 5px 0;
  }

  th {
    padding: 10px;
  }
`;
