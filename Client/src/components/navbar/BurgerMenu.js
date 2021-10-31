import React,{useState} from 'react'
import styled from 'styled-components';
import RightNav from './RightNav';

const StyledBurger = styled.div`
width:2rem;
height:2rem;
position:fixed;

top:15px;
right:20px;
display:flex;
justify-content:space-around;
flex-flow:column nowrap;
z-index:20;
display:none;


@media(max-width:768px){

    display:flex;
    justify-content:space-around;
    flex-flow:column-nowrap;
    
}

@media(max-width:480px){

    display:flex;
    justify-content:space-around;
    flex-flow:column-nowrap;
    left:200px;
    top:30px;

}



div{
    width:2rem;
    height:0.25rem;
    background-color:${({open}) => open ? 'grey' : 'black'};
    border-radius:10px;
    transform-origin:1px;
    transition:.3s linear;

    &:nth-child(1) {
        transform:${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
        transform:${({open}) => open ? 'translateX(100%)' : 'translateX(0)'};
        opacity:${({open}) =>open ? 0:1};
    }

    &:nth-child(3) {
        transform:${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }



}
`

function BurgerMenu() {


    const [open,setOpen] =useState(false);
    return (

        <>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />



        </StyledBurger>
        <RightNav open={open} />    
        </>
    )
}

export default BurgerMenu
