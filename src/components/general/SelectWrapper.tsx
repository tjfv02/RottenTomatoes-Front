import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { useField, useFormikContext } from 'formik';
import React, { useEffect } from 'react';
import { CustomSelectProps } from '../../interfaces/Form';
import theme from '../../theme';

const SelectWrapper: React.FC<CustomSelectProps> = ({ name, label, options, onChange: propOnChange, value: propValue, ...otherProps }) => {
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);
    const { value: fieldValue } = field;

    useEffect(() => {
        if (propOnChange) {
            propOnChange(fieldValue);
        }
    }, [fieldValue, propOnChange]);

    const handleChange = (evt: React.ChangeEvent<{ value: unknown }>) => {
        const { value } = evt.target;
        setFieldValue(name, value);
        if (propOnChange) {
            propOnChange(value);
        }
    };

    const effectiveValue = propValue !== undefined ? propValue : fieldValue;

    return (
        <FormControl fullWidth variant="filled" error={meta.touched && !!meta.error}>
            <InputLabel>{label}</InputLabel>
            <Select
                {...field}
                {...otherProps}
                value={effectiveValue}
                onChange={handleChange}
                label={label}
                style={{ backgroundColor: theme.palette.grey[50] }}
            >
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
            {meta.touched && meta.error && <div>{meta.error}</div>}
        </FormControl>
    );
};

export default SelectWrapper;
