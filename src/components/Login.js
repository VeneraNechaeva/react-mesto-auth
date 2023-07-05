import React from 'react';

function Login() {
    return (

        <form className="login__form" name="login" noValidate="">
            <h2 className="login__title">Вход</h2>
            <div className="login__label">
                <input
                    id="email"
                    className="login__field login__field_text_email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    minLength={2}
                    maxLength={40}
                    required=""
                />
                <span className="login__error email-error" />
            </div>
            <div className="login__label">
                <input
                    id="password"
                    className="login__field login__field_text_password"
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    minLength={10}
                    maxLength={10}
                    required=""
                />
                <span className="login__error password-error" />
            </div>
            <button className="login__button" type="submit">
                Войти
            </button>
        </form>
    )
}

export default Login;