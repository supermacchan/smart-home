import styled from 'styled-components';

export const Section = styled.section`
    margin-top: 180px;
    margin-bottom: 192px;
`

export const Title = styled.h2`
    max-width: 358px;

    font-size: 36px;
    font-weight: 600;
    line-height: 1.27;
    letter-spacing: 0.8px;

    color: var(--title-text-color);
`

export const Button = styled.button`
    cursor: pointer;

    margin-top: 32px;

    border: none;
    background-color: transparent;

    font-family: inherit;
    font-size: 14px;
    font-weight: 600;
    line-height: 2.14;
    letter-spacing: 0.5px;

    color: var(--accent-text-color);

    display: flex;
    align-items: center;
    gap: 24px;
`

export const CardList = styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 100px;

    max-height: 1100px;
    margin-left: 80px;
`

export const Card = styled.li`
    width: 380px;
    padding: 236px 48px 51px 48px;

    background-repeat: no-repeat;
    background-position: center top;

    border-radius: 10px;
    box-shadow: 5px 20px 50px 0px rgba(16, 112, 177, 0.20);
`

export const CardTitle = styled.h3`
    font-size: 20px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: 0.7;

    color: var(--main-text-color);
`

export const CardText = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 1.62;
    letter-spacing: 0.8px;

    color: var(--main-text-color);
    opacity: 0.8;

    margin-top: 16px;
`