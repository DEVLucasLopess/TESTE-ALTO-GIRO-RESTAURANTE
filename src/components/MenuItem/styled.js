import styled from 'styled-components';

export const LinkArea = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    background-color: ${props=>props.active ? '#0B4D0B' : 'transparent' };
    border-radius: 10px;
    margin-bottom: 10px;
    cursor: pointer;
`;

export const LinkIcon = styled.img`
    width: 30px;
    heigth: auto;
`;

export const Button = styled.button`
    height: 30px;
    width: 45px;
    border-radius: 20px;
    border: 1px solid #EDEDED;
    cursor: pointer;
`;