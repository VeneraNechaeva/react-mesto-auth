import React from 'react';

function InfoTooltip({popupName, isOpen, onClose, classText, title}) {
    return (
        <div className={`popup popup_${popupName} ${isOpen ? "popup_opened" : ""}`}>
            <div className="popup__container">
                <button className="popup__close-icon" type="button" onClick={onClose} />
                <h2 className={`popup__${classText}`}>{title}</h2>
            </div>
        </div>
    )
}

export default InfoTooltip;