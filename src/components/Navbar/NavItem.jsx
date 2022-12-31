import React from 'react';
import styled from 'styled-components';

const UnstyledNavItem = (cat) => {
    return (
        <li>
            <a>
                {cat.imageSrc}
                <p>{cat.name}</p>
            </a>
        </li>
    )
};

const NavItem = styled(UnstyledNavItem)`
    display: flex;
    align-items: center;
    justify-content: center;
`



export default NavItem;