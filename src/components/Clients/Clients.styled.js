import styled from 'styled-components';

export const Section = styled.section`
    width: 1366px;
    margin: 0 auto;
    padding-top: 96px;
    padding-bottom: 125px;

    border-radius: 200px 0px 0px 0px;

    background-color: var(--secondary-bg-color);
`

export const TextArea = styled.div`
    display: flex;
    align-items: end;
    gap: 93px;

    margin-bottom: 108px;
`

export const Title = styled.h2`
    max-width: 227px;

    font-size: 36px;
    font-weight: 600;
    line-height: 1.27;
    letter-spacing: 0.8px;

    color: var(--light-text-color);
`

export const Text = styled.p`
    max-width: 540px;

    font-size: 16px;
    font-weight: 400;
    line-height: 1.62;
    letter-spacing: 0.8px;

    color: var(--light-text-color);
    opacity: 0.6;
`

export const Border = styled.div`
    background-color: rgba(255,255,255,0.6);
`

export const ClientList = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1px;
`

export const Client = styled.li`
    cursor: pointer;

    background-color: var(--secondary-bg-color);

    display: flex;
    justify-content: center;
    align-items: center;

    transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
        background-color: var(--dark-bg-color);
    }
`

export const Button = styled.button`
    cursor: pointer;
    
    width: 100%;
    height: 100%;

    border: none;
    background-color: rgba(31, 63, 104, 0.2);
    color: var(--light-text-color);

    font-family: inherit;
    font-size: 20px;
    font-weight: 600;
    line-height: 2.36;
    letter-spacing: 0.4px;
`