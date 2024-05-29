/* eslint-disable @typescript-eslint/no-explicit-any */
import { AlertColor, SnackbarCloseReason } from "@mui/material";

export interface AlertOptions {
    open: boolean;
    autoHideDuration: number;
    severity: AlertColor;
    message: string;
    onClose?: (event: React.SyntheticEvent<any> | Event, reason: SnackbarCloseReason) => void;
}

export interface DefaultSelect {
    value: number | string;
    label: string;
}

export interface FormProps {
    data?: any;
    setEditData: Function;
    onAlertChange: Function;
    onClose: Function;
};

export interface ListParams {
    init: number;
    fin: number;
    search?: string;
}

export interface FilterParams {
    search: number;
}

export interface ListError {
    status: number;
    data: string;
}

export interface LoadingProps {
    onLoadingChange: Function;
    onAlertChange: Function;
}