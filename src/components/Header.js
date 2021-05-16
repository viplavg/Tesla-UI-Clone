import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {selectCars} from "../features/car/carSlice";
import {useSelector} from 'react-redux';

function Header() {

    const cars = useSelector(selectCars);
    console.log(cars);

    const [burgerstatus, setburgerstatus] = useState(false);

    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt="tesla_logo" />
            </a>
            <Menu>
                {cars && cars.map((car,index) => (
                    <a key={index} href="#">{car}</a>
                ))}
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={()=>setburgerstatus(true)} />
            </RightMenu>
            <BurgerNav show={burgerstatus} >
                <CloseWrapper>
                <CustomClose onClick={()=>setburgerstatus(false)} />
                </CloseWrapper>
                {cars && cars.map((car,index)=>(
                    <li key={index}><a href="#">{car}</a></li>
                ))}
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-In</a></li>
                <li><a href="#">Cyber Truck</a></li>
                <li><a href="#">Roadster</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header;


const Container = styled.div`

    min-height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    z-index: 1;


`

const Menu = styled.div`

    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
    }

    @media (max-width: 768px) {
        display: none;
    }

`


const RightMenu = styled.div`

    display: flex;
    align-items: center;

    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }

`

const CustomMenu = styled(MenuIcon)`

    cursor: pointer;

`

const BurgerNav = styled.div`

    position: fixed;
    top:0;
    bottom:0;
    right: 0;
    list-style: none;
    background: white;
    width: 300px;
    z-index: 16;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)' };
    transition: transform 0.4s;

    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0,.2);
    }

    a {
        font-weight: 600;
    }
`

const CustomClose = styled(CloseIcon)`

    cursor: pointer;

`


const CloseWrapper = styled.div`

    display: flex;
    justify-content: flex-end;

`