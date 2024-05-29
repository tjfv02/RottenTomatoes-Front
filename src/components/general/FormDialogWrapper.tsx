import React from 'react';
import { Dialog, DialogContent } from '@mui/material';
import { FormDialogCustomProps } from '../../interfaces/General Components';

const FormDialogWrapper: React.FC<FormDialogCustomProps> = ({ open, handleClose, form }) => {

    return (
        <>
            <Dialog
                open={open}
                onClose={(_event, reason) => {
                    if (reason !== 'backdropClick') {
                        handleClose();
                    }
                }}
            >
                <DialogContent>
                    {form}
                </DialogContent>
            </Dialog>
        </>
    );

};

export default FormDialogWrapper;