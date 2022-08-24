import React from "react";
import { Container, Inputs, Label } from './styled';

export default ({label, name, type, value, onChange}) => {
    return(
       <Container>
            <Label>
                {label}
            </Label>

            <Inputs 
                name={name}
                id={name} 
                type={type} 
                value={value} 
                onChange={onChange} 
            />
       </Container>
    );
}