import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(209,236,255,0.2) 100%);
`

export const HeaderContent = styled.div`
    max-width: 1366px;
    padding: 48px 83px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Logo = styled.img`
    width: 48px;
    height: 48px;
`

export const MenuButton = styled.button`
    cursor: pointer;
    padding: 0;
    background-color: transparent;
    border: none;
    

    display: flex;
    justify-content: center;
    align-items: center;

    color: #356EAD;

    width: 32px;
    height: 32px;
`