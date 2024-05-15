import { useState, ChangeEvent, FormEvent } from 'react';
import { FormErrors, UseForm } from '../interfaces/Form';

const useForm = <T, >(initialValues: T): UseForm<T> => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<FormErrors<T>>({});

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const validate = (): boolean => {
    const validationErrors: FormErrors<T> = {};
    // Aquí puedes agregar tu lógica de validación
    // Por ejemplo:
    // if (!values.email) {
    //   validationErrors.email = "El email es requerido";
    // }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (callback: () => void) => (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validate()) {
      callback();
    }
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    resetForm,
  };
}

export default useForm;
