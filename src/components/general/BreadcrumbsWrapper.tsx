import React from 'react';
import { Breadcrumbs, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { BreadcrumbsCustomProps } from '../../interfaces/General Components';

const BreadcrumbsWrapper: React.FC<BreadcrumbsCustomProps> = ({ separator, title, linkName, linkUrl, icon }) => {
    return (
        <>
            <Breadcrumbs separator={separator} aria-label="breadcrumb">
                <NavLink to={linkUrl} style={{ display: 'flex', alignItems: 'center', color: 'inherit', textDecoration: "none" }}>
                    {icon} <Typography sx={{ fontSize: '18px', "&:hover": { textDecoration: "underline", } }}>{linkName}</Typography>
                </NavLink>
                <Typography fontWeight={'bold'} fontSize={'18px'} color="text.primary">{title}</Typography>
            </Breadcrumbs>
        </>
    );
};

export default BreadcrumbsWrapper;