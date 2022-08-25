import styled from 'styled-components';

export const Container = styled.div`
    background-color: #136713;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px;
`;

export const Logo = styled.img`
    width: auto;
    height: 70px;

    @media (max-width: 431px) {
        height: 50px;
    }

    @media (max-width: 300px) {
        height: 40px;
    }
`;

export const SearchInput = styled.input`
    border: 0;
    border-radius: 25px;
    width: ${props=>props.active ? 300 : 0}px;
    transition: all ease 0.5s;
    height: 50px;
    cursor: pointer;
    background-color: #FFF;
    background-image: url('/assets/search.png');
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: 10px center;
    outline: 0;
    padding-left: 50px;
    font-size: 16px;

    &:focus {
        cursor: text;
    }

    @media (max-width: 550px) {
        display: none;
    }
`;