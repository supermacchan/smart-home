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

    text-align: center;
    font-family: inherit;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.62;
    letter-spacing: 0.64px;

    transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    color 300ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
        background-color: var(--main-bg-color);
        color: var(--title-text-color);
    }
`

export const FooterContent = styled.div`
    display: flex;

    padding-top: 96px;
    padding-bottom: 64px;

    color: var(--light-text-color);
`

export const FooterLink = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 33px;
`

export const FooterLogo = styled.img`
    width: 48px;
    height: 32px;
`

export const FooterTitle = styled.h3`
    color: var(--light-text-color);
    font-size: 28px;
    font-weight: 600;
    line-height: 1.64;
    letter-spacing: 0.56px;
`

export const FooterContact = styled.div`
    margin-right: 100px;
`

export const ContactList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 300px;
`

export const ContactItem = styled.li`
    display: flex;
    gap: 16px;

    font-size: 16px;
    font-weight: 400;
    line-height: 1.62;
    letter-spacing: 0.8px;
`

export const FooterNav = styled.div`
    margin-right: 77px;
`

export const Subtitle = styled.h4`
    font-size: 20px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: 1px;

    margin-bottom: 32px;
`

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 24px;

    font-size: 16px;
    font-weight: 400;
    line-height: 1.62; 
    letter-spacing: 0.8px;
`

export const ListLink = styled.a`
    color: var(--light-text-color);

    transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
        color: var(--accent-text-color);
    }
`

export const ListItem = styled.li`
    color: var(--light-text-color);

    transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
        color: var(--accent-text-color);
    }
`

export const Copyright = styled.p`
    color: var(--light-text-color);
    opacity: 0.4;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.62; 
    letter-spacing: 0.8px;
`