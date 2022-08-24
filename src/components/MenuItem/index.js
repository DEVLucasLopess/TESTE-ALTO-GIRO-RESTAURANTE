import React from "react";
import { useHistory, useLocation } from 'react-router-dom';
import { LinkArea, LinkIcon } from './styled';
import { useCookies } from "react-cookie";

export default ({icon, link}) => {
    const history = useHistory();
    const location = useLocation();

    const [cookies, setCookies, removeCookie] = useCookies(['auth.user']);

    const handleLinkClick = (e) => {
        e.preventDefault();
        history.push( link );
    }

    const handleLogout = () => {
        removeCookie('auth.user', {path: '/'});
        history.push("/");
    }

    let isActive = location.pathname == link;

    return(
        <>
        <div>   
            <LinkArea active={isActive} haref={link} onClick={handleLinkClick}>
                <LinkIcon src={icon} />
            </LinkArea>
            
        </div>
        <button onClick={handleLogout}>Sair</button>
        </>
    );
}