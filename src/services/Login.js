import Variable from './Variable.js';

export const loginUser = (_username, _pass) => {
  return fetch(Variable.API_URL + 'login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: _username,
      password: _pass,
    }),
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
export const registrationUser = (
  _username,
  _fullName,
  _password,
  _contactPhone,
) => {
  return fetch(Variable.API_URL + 'registration', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: _username,
      fullName: _fullName,
      password: _password,
      contactPhone: _contactPhone,
    }),
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
//Получение ID IOS устройства
export const anonymousId = _deviceId => {
  return fetch(
    Variable.API_URL + 'registration/anonymous' + '?deviceId=' + _deviceId,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  )
    .then(function (response) {
      return response.json();
    })
    .catch(function (error) {
      console.log(
        'There has been a problem with your fetch operation: ' + error.message,
      );
    });
};
//Получение Личных данных по ВК
export const loginVK = (_tokenVK, _idUser) => {
  return fetch(
    `https://api.vk.com/method/users.get?user_ids=${_idUser}&fields=country&access_token=${_tokenVK}&v=5.101`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify({
      //   token: _tokenVK,
      //   idUser: _idUser,
      // }),
    },
  )
    .then(function (response) {
      return response.json();
    })
    .catch(function (error) {
      console.log(
        'There has been a problem with your fetch operation: ' + error.message,
      );
    });
};
//Отправка на сервер данный из вк
export const registrationVK = (_firstName, _lastName, _username, _email) => {
  return fetch('http://80.64.169.167:9398/api/1/registration/vk', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName: _firstName,
      lastName: _lastName,
      email: _email,
      username: _username,
    }),
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

export const PinCodenUser = (_code, _iv, _token) => {
  return fetch(Variable.API_URL + '/fast/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: _token,
    },
    body: JSON.stringify({
      cipher: _code,
      iv: _iv,
    }),
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

export const getFastCode = _token => {
  return fetch(Variable.API_URL + '/get/fast/code', {
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

export const changePass = (_token, password, newPassword) => {
  return fetch(Variable.API_URL + '/change/password', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: _token,
    },
    body: JSON.stringify({
      password: password,
      newPassword: newPassword,
    }),
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
