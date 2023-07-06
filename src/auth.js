// Аутентификация пользователя

export const BASE_URL = 'https://auth.nomoreparties.co';

// Функция для регистрации пользователя
export const register = (email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then((response) => {
            return response.json();
        })
        .then((res) => {
            return res;
        })
        .catch((err) => console.log(err));
};

// Функция, которая проверяет логин и пароль пользователя на 
// соответствие какому-либо профилю, хранящемуся в базе данных.
export const login = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })

        .then((response => response.json()))

        .then((data) => {
            if (data.token) {
                localStorage.setItem('jwt', data.token);
                return data.token;
            }
        })
        .catch((err) => console.log(err));
};

// Функция, которая проверяет логин и пароль пользователя на 
// соответствие какому-либо профилю, хранящемуся в базе данных.
export const getContent = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
        .then(res => res.json())
        .then(data => data)

        .catch((err) => console.log(err));
};