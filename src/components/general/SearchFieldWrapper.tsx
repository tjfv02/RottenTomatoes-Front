import { Search } from '@mui/icons-material';
import { InputAdornment, TextField } from '@mui/material';
import React from 'react';
import './css/search-field.component.css';
import { SearchFieldCustomProps } from '../../interfaces/General Components';

const SearchFieldWrapper: React.FC<SearchFieldCustomProps> = ({ placeholder, handleSearch, handleSearchValue }) => {

    return (
        <>
            <TextField
                className='align-placeholder'
                placeholder={placeholder}
                sx={{ m: 1, width: '49ch' }}
                onKeyDown={handleSearch}
                onChange={handleSearchValue}
                InputProps={{
                    startAdornment: <InputAdornment position="start"><Search /></InputAdornment>,
                }}
            />
        </>
    );

};

export default SearchFieldWrapper;