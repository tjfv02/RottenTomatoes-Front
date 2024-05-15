import { ChangeEvent, FormEvent } from 'react';
// Definimos una interfaz genérica para los errores del formulario
export interface FormErrors<T> {
    [K in keyof T]?: string;
  }
  
  // Definimos una interfaz genérica para el hook `useForm`
export interface UseForm<T> {
    values: T;
    errors: FormErrors<T>;
    handleChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    handleSubmit: (callback: () => void) => (event: FormEvent<HTMLFormElement>) => void;
    resetForm: () => void;
  }