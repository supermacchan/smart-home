import styled from 'styled-components';
import heroImage from "../../images/hero.png";

export const HeroSection = styled.section`
    background: linear-gradient(180deg, rgba(209,236,255,0.1) 0%, rgba(16,112,177,0.1) 100%);
    width: 100%;
`

export const BackgroundImage = styled.div`
    background-image: url(${heroImage});
    background-repeat: no-repeat;
    background-position: right;

    display: flex;
    max-width: 1366px;
    margin: 0 auto;
`

export const HeroContainer = styled.div`
    width: 940px;
    margin: 0 auto;
    padding-top: 109px;
    padding-bottom: 190px;
`

export const Title = styled.h1`
    max-width: 510px;

    font-size: 48px;
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: 2.56px;

    color: var(--main-text-color);
`

export const Description = styled.p`
    max-width: 425px;
    margin-top: 32px;

    font-size: 16px;
    font-weight: 400;
    line-height: 1.62;
    letter-spacing: 0.8px;

    color: var(--main-text-color);
`

export const Button = styled.button`
    cursor: pointer;

    margin-top: 71px;
    padding: 15px 48px;

    border: none;
    border-radius: 10px;
    
    background-color: var(--secondary-bg-color);
    box-shadow: 5px 10px 20px 0px rgba(53, 110, 173, 0.20);

    text-align: center;
    font-family: inherit;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.62;
    letter-spacing: 0.64px;

    color: var(--light-text-color);

    transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
        background-color: var(--dark-bg-color);
    }
`