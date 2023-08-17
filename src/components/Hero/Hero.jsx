import { 
    HeroSection, 
    BackgroundImage,
    HeroContainer,
    Title,
    Description,
    Button
} from "./Hero.styled";

export const Hero = () => {
    return (
        <HeroSection id="hero">
            <BackgroundImage>
                <HeroContainer>
                    <Title>New Automation Tool for Your Home</Title>
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus tristique vulputate ultrices ut mauris tellus at. Posuere sollicitudin odio tellus elit.
                    </Description>
                    <Button type="button">See Our Project</Button>
                </HeroContainer>
            </BackgroundImage>
        </HeroSection>
    );
}