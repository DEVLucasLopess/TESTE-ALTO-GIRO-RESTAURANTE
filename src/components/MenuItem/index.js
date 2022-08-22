import React from "react";
import { useHistory, useLocation } from 'react-router-dom';
import { LinkArea, LinkIcon } from './styled';

export default ({icon, link}) => {
    const history = useHistory();
    const location = useLocation();

    const handleLinkClick = (e) => {
        e.preventDefault();
        history.push( link );
    }

    let isActive = location.pathname == link;

    return (
        <div>   
            <LinkArea active={isActive} haref={link} onClick={handleLinkClick}>
                <LinkIcon src={icon} />
            </LinkArea>
        </div>
    );
}