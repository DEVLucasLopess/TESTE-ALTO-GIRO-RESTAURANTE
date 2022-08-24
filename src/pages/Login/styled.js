import styled from 'styled-components';

export const Container = styled.div`
    width: 400px;
    margin: 0 auto;   
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
`;

export const Wrapper = styled.div`
    background-color: #FFF;
    border-radius: 15px;
    height: 400px;
    width: 350px;
    padding: 1rem;
`;

export const LoginTittle = styled.h1`
    text-align: center;
    color: #0b4d0b;
    margin-bottom: 45px;
`;

export const UserLoginForm = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`;

export const Input = styled.input`
    border-radius: 4px;
    border: 1px solid #BBBBBB;
    height: 36px;
    padding: 5px 10px;
`;

export const Button = styled.button`
    height: 40px;
    border: none;
    width: 100%;
    margin-top: 30px;
    margin-bottom: 0px;
    background-color: #0b4d0b;
    color: #fff;
    border-radius: 10px;
    cursor: pointer;
`;

export const LinkRedirect = styled.div`
    text-align: end;
    font-weight: bold;
    color: #0b4d0b;
    text-decoration: none;
`;

export const DadosError = styled.div`
    color: red;
`;