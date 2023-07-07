import React, { useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import * as auth from '../auth.js';
import UserForm from './UserForm.js';

// Компонент для регистрации
function Register({onSuccessRegister}) {

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

    // Обработчик регистрации
    const onRegister = (e) => {
        e.preventDefault();

        auth.register(formValue.email, formValue.password)
            .then((res) => {
                if (res?.data) {
                    onSuccessRegister();
                    // navigate('/signin', { replace: true })      
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <UserForm name="register" title="Регистрация" buttonText="Зарегистрироваться"
            text="Уже зарегистрированы?" textLink="Войти" onSubmit={onRegister}>

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

export default Register;