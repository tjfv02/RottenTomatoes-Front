import React from 'react';
import { Button } from '@mui/material';
import { useFormikContext } from 'formik';
import { CustomButtonProps } from '../../interfaces/Form';
import theme from '../../theme';

const ButtonWrapper: React.FC<CustomButtonProps> = ({children, ...otherProps}) => {
    const { submitForm } = useFormikContext();

    const handleSubmit = () => {
        submitForm();
    }

    return (
        <Button variant="text" onClick={handleSubmit} style={{ backgroundColor: theme.palette.secondary.main, color: 'white' }} fullWidth={false} {...otherProps} >{children}</Button>
    );

};

export default ButtonWrapper;