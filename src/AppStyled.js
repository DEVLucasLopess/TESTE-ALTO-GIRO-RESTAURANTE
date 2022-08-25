import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    background-color: red;
`;

export const Menu = styled.div`
    display: flex;
    justify-content: center;;
    align-items: center;
    background-color: #136713;
    width: 80px;
    flex-direction: column;

    @media (max-width: 629px) {
        display: none;
    }
`;

export const Footer = styled.div``;

export const Body = styled.div`
    display: flex;
    background-color: #00980d;
    background-image: url('/assets/bg.png');
    flex: 1;
    overflow-y: auto;
`; 