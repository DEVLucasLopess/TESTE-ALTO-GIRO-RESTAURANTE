import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 15px;

    @media (max-width: 1126px) {
        width: 97%;
    }

    @media (max-width: 550px) {
        width: 94%;
    }
`;

export const CategoryArea = styled.div`
    color: #fff;
    text-align: center;
    margin-top: 20px;
`;

export const CategoryList = styled.div`
     display: flex;
     justify-content: center;
     margin-top: 10px;
`;

export const ProductArea = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const ProductList = styled.div`

`;

export const ProductAreaAltoRoda = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const ProductListAltoRoda = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 30px;
`;

export const TextMenu = styled.h1`
    text-align: center;
    color: #fff;
`;