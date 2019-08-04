import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};

// const URL_MONTHLY_PAYMENTS = 'http://localhost:5000/monthly-payments';
const URL_MONTHLY_PAYMENTS = 'https://secret-journey-21988.herokuapp.com/monthly-payments';

export const calculate = (inputData, callback) => {
  axios.post(URL_MONTHLY_PAYMENTS, inputData, { headers })
    .then((result) => {
      callback(result.data);
    })
    .catch((error) => {
      console.warn(error);
    });
}