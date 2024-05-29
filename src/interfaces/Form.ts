/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextFieldVariants, StandardTextFieldProps } from '@mui/material/TextField';
import { ReactNode } from 'react';

export interface DateRangeFilterProps {
    index: number;
    disabled: boolean;
}

export interface CustomButtonProps {
    children: ReactNode;
}

export interface CustomCheckBoxProps {
    name: string;
    label: string;
    legend: string;
}

export interface GridSelectFieldProps {
    options: any[];
    accountNumber: string;
    onChange: Function;
    type: number;
    value: string;
    disabled?: boolean;
}

export interface CustomTextFieldProps {
    name: string;
    onChange?: (value: any) => void;
}


export interface CustomYearPickerProps {
    name: string;
    onChange?: (value: any) => void;
    minYear: number; // Año mínimo configurable a través de props
}

export interface CustomSelectProps {
    name: string;
    label: string;
    options: any[];
    value?: any;
    onChange?: (value: any) => void;
    multiple?: boolean;
}

export interface ConfigTextField {
    fullWidth?: boolean;
    variant?: TextFieldVariants;
    error?: boolean;
    helperText?: string;
}

export interface ConfigSelect {
    select: boolean;
    variant: TextFieldVariants;
    fullWidth: boolean;
    onChange: StandardTextFieldProps['onChange'];
    error?: boolean;
    helperText?: string;
}
export interface ConfigSearch {
    select?: boolean;
    variant?: TextFieldVariants;
    fullWidth: boolean;
    onChange: StandardTextFieldProps['onChange'];
    onFocus?: StandardTextFieldProps['onFocus'];
    value?: string;
    error?: boolean;
    helperText?: string;
}

export interface ConfigDatePicker {
    type: string;
    variant: TextFieldVariants;
    fullWidth: boolean;
    InputLabelProps: Object;
    error?: boolean;
    helperText?: string;
}

export interface CustomDialogSelectProps {
    isOpen: boolean;
    onClose: (value: any) => void;
    onDownload: (value: any) => void;
    titleDialog: string;
    optionSelect: any[];
    nameSelect: string;
    valueSelect: any;
    onChangeSelect: (value: any) => void;
}