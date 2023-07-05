import React, { useState } from 'react';
import UserForm from './UserForm.js';

// Компонент для входа
function Login() {

    // Стейт переменные, в которых содержатся значения инпутов
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Обработчики изменения инпута, обновляет стейт 
    function handleChangeEmail(e) {
        setName(e.target.value);
    }

    function handleChangPassword(e) {
        setDescription(e.target.value);
    }

    return (
        <UserForm name="login" title="Вход" buttonText="Войти" text="">
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
                    onChange={handleChangeEmail}
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
                    onChange={handleChangPassword}
                />
                <span className="form__error password-error" />
            </div>
        </UserForm>
    )
}

export default Login;