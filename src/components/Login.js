import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as auth from '../auth.js';
import UserForm from './UserForm.js';

// Компонент для входа
function Login({ handleLogin, handleFailLogin }) {

    // Стейт переменные, в которых содержатся значения инпутов
    const [formValue, setFormValue] = useState({
        email: '',
        password: '',
    });

    // Хук возвращает функцию, которая позволяет рограммно перемещаться
    const navigate = useNavigate();

    // Обработчик изменения инпута, обновляет стейт 
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormValue({
            ...formValue,
            [name]: value
        });
    }

    // Обработчик авторизации
    const onLogin = (e) => {
        e.preventDefault();

        if (!formValue.email || !formValue.password) {
            return;
        }
        auth.login(formValue.email, formValue.password)
            .then((jwt) => {
                if (jwt) {
                    localStorage.setItem('jwt', jwt);
                    setFormValue({ username: '', password: '' });
                    handleLogin(e);
                    navigate('/users/me', { replace: true });
                } else {
                    handleFailLogin();
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <UserForm name="login" title="Вход" buttonText="Войти" text="" textLink=""
            onSubmit={onLogin}>
            <div className="form__label">
                <input
                    id="email"
                    className="form__field form__field_text_email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    minLength={2}
                    maxLength={40}
                    required
                    value={formValue.email}
                    onChange={handleChange}
                />
                <span className="form__error email-error" />
            </div>
            <div className="form__label">
                <input
                    id="password"
                    className="form__field form__field_text_password"
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    minLength={10}
                    maxLength={10}
                    required
                    value={formValue.password}
                    onChange={handleChange}
                />
                <span className="form__error password-error" />
            </div>
        </UserForm>
    )
}

export default Login;