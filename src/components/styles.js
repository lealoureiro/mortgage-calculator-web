import styled from "styled-components";

export const Form = styled.form`
  + form {
    margin-top: 40px;
  }

  button {
    margin-top: 14px;
    width: 100%;
  }

  .delete {
    width: 34px;
  }

  .calculate {
    padding: 10px 0;
    marginTop: 30px;
    width: 246px;
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
  align-items: flex-end;
  display: flex;
  padding: 10px 0;

  fieldset {
    margin-top: 0;
  }

  fieldset + fieldset {
    margin-left: 10px;

    @media (max-width: 640px) {
      margin-left: 0;
      margin-top: 10px;
    }
  }

  @media (max-width: 640px) {
    align-items: flex-start;
    flex-direction: column;
  }

  .debtPercentage {
    width: 98px;
  }

  .interest {
    width: 60px;
  }
`;

export const StyledExtraRepaymentInput = styled.div`
  align-items: flex-end;
  display: flex;
  padding: 10px 0;

  fieldset {
    margin-top: 0;
  }

  fieldset + fieldset {
    margin-left: 10px;

    @media (max-width: 640px) {
      margin-left: 0;
      margin-top: 10px;
    }
  }

  @media (max-width: 640px) {
    align-items: flex-start;
    flex-direction: column;
  }

  .month {
    width: 60px;
  }

  .amount {
    width: 126px;
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
  border-collapse: collapse;

  tr {
    padding: 5px 0;
  }

  td {
    text-align: center;
    padding: 5px 0;
  }

  td.monthlyPaymentsCellBlue {
    background-color: #a7e1fc;
  }

  th {
    padding: 10px;
  }
`;
