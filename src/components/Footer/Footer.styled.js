import styled from 'styled-components';

export const FooterSection = styled.footer`
    width: 1366px;
    margin: 0 auto;

    background-color: var(--secondary-bg-color);
`

export const FooterContainer = styled.div`
    border-radius: 0px 200px 0px 0px;
    background-color: var(--dark-bg-color);

    margin-right: 96px;
    padding: 91px 197px 64px 213px;
`

export const TextArea = styled.div`
    position: relative;
    padding-bottom: 96px;

    &:after {
        content: '';
        display: block;

        position: absolute;
        bottom: 0;
        left: -213px;

        height: 1px;
        width: calc(100% + 213px);

        background-color: rgba(255, 255, 255, 0.4);
    }
`

export const Title = styled.h2`
    max-width: 357px;

    font-size: 36px;
    font-weight: 600;
    line-height: 1.27;
    letter-spacing: 0.8px;

    color: var(--light-text-color);
`

export const Text = styled.p`
    max-width: 460px;
    margin-top: 32px;

    font-size: 16px;
    font-weight: 400;
    line-height: 1.62;
    letter-spacing: 0.8px;

    color: var(--light-text-color);
    opacity: 0.6;
`

export const Button = styled.button`
    cursor: pointer;

    position: absolute;
    top: 70px;
    right: 0;

    padding: 15px 74px;

    border: none;
    border-radius: 10px;
    
    background: var(--secondary-bg-color);
    color: var(--light-text-color);
    /* box-shadow: 5px 10px 20px 0px rgba(53, 110, 173, 0.20); */

    text-align: center;
    font-family: inherit;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.62;
    letter-spacing: 0.64px;
`

export const FooterContent = styled.div`
    padding-top: 96px;
`