//Отправка заявки
import Variable from './Variable.js';
export const postApplicationUser = (_token, formdata) => {
  return fetch(Variable.API_URL + 'add_claim', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      Authorization: _token,
    },
    body: formdata,
  })
    .then(function (response) {
      return response.json();
    })
    .catch(function (error) {
      console.log(
        'There has been a problem with your fetch operation: ' + error.message,
      );
    });
};
//Получение заявок
export const getClaims = _token => {
  return fetch(Variable.API_URL + 'get_claims', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: _token,
    },
  })
    .then(function (response) {
      return response.json();
    })
    .catch(function (error) {
      console.log(
        'There has been a problem with your fetch operation: ' + error.message,
      );
    });
};
