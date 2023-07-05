// Общий компонент для формы входа и регистрации

function UserForm({ name, title, buttonText, children, text, onSubmit }) {
    return (
        <form className="form" name={name} noValidate="" onSubmit={onSubmit}>
            <h2 className="form__title">{title}</h2>
            {children}
            <button className="form__button" type="submit">
                {buttonText}
            </button>
            <p className="form__text">{text}</p>
        </form>
    )
}

export default UserForm;
