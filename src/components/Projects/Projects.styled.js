import styled from 'styled-components';

export const Section = styled.section`
    margin-bottom: 192px;
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

    color: var(--title-text-color);
`

export const Text = styled.p`
    max-width: 540px;

    font-size: 16px;
    font-weight: 400;
    line-height: 1.62;
    letter-spacing: 0.8px;

    color: var(--main-text-color);
    opacity: 0.8;
`

export const ProjectList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 96px;
`

export const ProjectTitle = styled.h3`
    font-size: 28px;
    font-weight: 500;
    line-height: 1.64;
    letter-spacing: 1.4px;

    color: var(--light-text-color);
`

export const ProjectDescription = styled.p`
    color: var(--light-text-color);
    font-size: 16px;
    font-weight: 400;
    line-height: 2.87;
    letter-spacing: 0.8px;
    opacity: 0.8;
`