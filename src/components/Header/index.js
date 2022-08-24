import React from "react";
import {useState} from 'react';
import {Container, Logo, SearchInput} from './styled';

export default ({ search, onSearch }) => {
    const [inputActive, setInputActive] = useState(search == '' ? false : true);

    const handleInputFocus = () => {
        setInputActive(true);
    }

    const handleInputbluer = () => {
        if (search == '') {
            setInputActive(false);
        } 
    }

    const handleChange = (event) => {
        onSearch(event.target.value);
    }

    return (
        <Container>
            <Logo src="/assets/logo.png" />
            <SearchInput 
                type="text" 
                placeholder="informe um produto..." 
                active={inputActive} 
                onFocus={handleInputFocus} 
                onBlur={handleInputbluer} 
                value={search}
                onChange={handleChange}

            />
        </Container>
    );
}