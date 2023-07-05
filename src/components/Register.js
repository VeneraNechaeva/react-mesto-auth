import React from 'react';
import UserForm from './UserForm.js';

// Компонент для регистрации
function Register() {

    return (
        <UserForm name="register" title="Регистрация" buttonText="Зарегистрироваться"
            text="Уже зарегистрированы? Войти">

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
                />
                <span className="form__error password-error" />
            </div>
        </UserForm>
    )
}

export default Register;