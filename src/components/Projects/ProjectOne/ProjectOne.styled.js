import styled from 'styled-components';
import bg from '../../../images/project-1-bg.png'

export const Project = styled.div`
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