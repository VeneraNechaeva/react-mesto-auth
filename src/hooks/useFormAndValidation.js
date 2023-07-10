import { useState, useCallback } from 'react';

export function useFormAndValidation() {
    // Стейт переменные
    // Cодержатся значения инпутов
    const [values, setValues] = useState({});
    // Cодержатся ошибки
    const [errors, setErrors] = useState({});
    // Валидность импутов
    const [isValid, setIsValid] = useState(true);

    // Обработчик изменения инпутов, обновляет стейт
    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: e.target.validationMessage });
        setIsValid(e.target.closest('form').checkValidity());
    };


    const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
        setValues(newValues);
        setErrors(newErrors);
        setIsValid(newIsValid);
    }, [setValues, setErrors, setIsValid]);

    return { values, handleChange, errors, isValid, resetForm, setValues, setIsValid };
}