import styled from 'styled-components';

export const Container = styled.div`
    width: 80px;
    height: 80px;
    background-color: ${props=>props.active == props.id ? '#00980d' : '#136713'};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    margin-right: 5px;
    cursor: pointer;
    transition: all ease .3s;
    border: 1px solid #DEDEDE;

`;

export const CategoryImage = styled.img`
    width: 55px;
    height: 55px;
`;