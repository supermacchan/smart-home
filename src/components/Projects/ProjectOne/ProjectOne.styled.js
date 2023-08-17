import styled from 'styled-components';
import bg from '../../../images/project-1-bg.png'

export const Project = styled.div`
    position: relative;

    width: 940px;
    height: 417px;
    
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
`

export const ProjectContent = styled.div`
    text-align: right;

    width: 100%;
    height: 100%;
    padding: 48px 65px;

    border-radius: 10px;
    background: linear-gradient(90deg, #1F3F68 0%, rgba(31, 63, 104, 0.37) 99.82%);
`

export const Overlay = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;

    width: 420px;
    height: 270px;

    background-color: var(--dark-bg-color);
    opacity: 0.9;

    border-top-left-radius: 225px;
`

export const Button = styled.button`
    cursor: pointer;

    position: absolute;
    bottom: 100px;
    left: 150px;

    color: var(--light-text-color);
    background-color: transparent;
    border: none;

    font-family: inherit;
    font-size: 20px;
    font-weight: 600;
    line-height: 2.14;
    letter-spacing: 0.5px;
`