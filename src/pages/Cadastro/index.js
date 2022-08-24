import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, Wrapper, LoginTittle, UserLoginForm, Button, LinkRedirect } from './styled';
import Input from '../../components/Input';
import { useState } from 'react';
import { query as q } from 'faunadb';
import { fauna } from "../../services/fauna";
import { useCookies } from "react-cookie";
import { useEffect } from 'react';

export default () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const [cookies, setCookies, removeCookie] = useCookies(['auth.user']);

    const history = useHistory();

    useEffect (() => {
        if(cookies['auth.user'] && cookies['auth.user'] !== undefined) {
            history.push("/menu");
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const user = await fauna.query(
                q.Get(
                    q.Intersection(
                        q.Match(q.Index('user_by_email'), email),
                        q.Match(q.Index('user_by_password'), password),
                    )
                )
              )
           
              if(user.data) {
                setCookies('auth.user', user.data.email, {path: '/'});
                history.push("/menu");
              }
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <Container>
            <Wrapper>
                <LoginTittle>Cadastro</LoginTittle>
                <form autoComplete="nope" onSubmit={handleSubmit}>
                    <UserLoginForm>
                        <Input label="Informe seu e-mail:" name="email" type="email" placeholder="Informe seu e-mail"  value={email} onChange={e => setEmail(e.target.value)}/><br/>
                        <Input label="Informe sua Senha:" name="password" type="password" placeholder="Informe sua senha" value={password} onChange={e => setPassword(e.target.value)}/>
                    </UserLoginForm>

                    <Button type="submit" theme="contained-green" className="user-login__submit-button" rounded>
                        Entrar
                    </Button><br/><br/>

                    <LinkRedirect>
                        <Link to="/">Voltar</Link>
                    </LinkRedirect>
                </form>
            </Wrapper>
        </Container>
    );
}