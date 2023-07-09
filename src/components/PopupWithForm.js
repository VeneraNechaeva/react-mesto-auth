import Popup from "./Popup";

function PopupWithForm({ popupName, isOpen, onClose, classText, title, name, children, buttonText, onSubmit }) {
    
    return (
        <Popup isOpen={isOpen} popupName={popupName} onClose={onClose} children={children}>
                <h2 className={`popup__${classText}`}>{title}</h2>
                <form className="popup__form" name={name} noValidate="" onSubmit={onSubmit} >
                    {children}
                    <button className="popup__button" type="submit">
                        {buttonText}
                    </button>
                </form>
        </Popup>
    )
}

export default PopupWithForm;