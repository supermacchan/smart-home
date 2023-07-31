import { Container } from "components/Container/Container";
import { ProjectOne } from "./ProjectOne/ProjectOne";
import { ProjectTwo } from "./ProjectTwo/ProjectTwo";
import { ProjectThree } from "./ProjectThree/ProjectThree";
import { 
    Section,
    TextArea,
    Title,
    Text,
    ProjectList
} from "./Projects.styled";

export const Projects = () => {
    return (
        <Section>
            <Container>
                <TextArea>
                    <Title>
                        Our Finished Projects
                    </Title>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </Text>
                </TextArea>
                
                <ProjectList>
                    <li><ProjectOne /></li>
                    <li><ProjectTwo /></li>
                    <li><ProjectThree /></li>
                </ProjectList>
                
            </Container>
        </Section>
    )
}