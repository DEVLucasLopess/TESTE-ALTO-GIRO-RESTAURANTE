import styled from 'styled-components';

export const Container = styled.div`
    width: 200px;
`;

export const Inputs = styled.input`
    width: 340px;
    height: 30px;
    border-radius: 5px;
    border: 2px solid #D3D3D3;
    padding: 0px 0px 0px 10px;

    @media (max-width: 630px) {
        width: 300px;
    }

    @media (max-width: 400px) {
        width: 300px;
    }

`;

export const Label = styled.label`
    padding-top: 20px;  
`;