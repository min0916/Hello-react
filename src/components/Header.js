import React, {useState, useEffect} from 'react';
import styled from 'styled-components'


const menus = ["home", "services", "contact"];
function Header(props) {

    const {} = props;

    return (

        <Container>

            <Logo>min</Logo>
            <nav>
                {
                    menus.map(function (menu) {
                        return  <div className="nav-item">{menu}</div>
                    })
                }







            </nav>

        </Container>
    )
}

const Container = styled.div`
    height: 70px;
    display:flex;
    justify-content: space-between;
    padding: 0 50px;
    
`;

const Logo = styled.div`
    font-size: 22px;
    display:flex;
    align-items:center;
    
`;
const nav = styled.nav`
    display:flex;
    .nav-item{
        height: 70px;
        display:flex;
        align-items:center;
        padding: 0 20px;
        text-transform: uppercase;
        cursor: pointer;
    }
`;
export default Header;