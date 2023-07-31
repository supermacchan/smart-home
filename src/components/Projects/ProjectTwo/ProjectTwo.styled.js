import styled from 'styled-components';
import bg from '../../../images/project-2-bg.png'

export const Project = styled.div`
    width: 422px;
    height: 417px;

    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
`

export const ProjectContent = styled.div`
    text-align: left;
    
    width: 100%;
    height: 100%;
    padding: 24px 32px;

    border-radius: 10px;
    background: linear-gradient(316deg, rgba(66, 165, 245, 0.40) 0%, rgba(21, 101, 192, 0.60) 77.52%);
`