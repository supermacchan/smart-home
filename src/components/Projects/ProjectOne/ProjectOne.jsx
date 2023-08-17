import { ProjectTitle, ProjectDescription } from "../Projects.styled";
import { Project, ProjectContent, Overlay, Button } from "./ProjectOne.styled";

export const ProjectOne = () => {
    return (
        <Project>
            <ProjectContent>
                <ProjectTitle>Smart Home Installation</ProjectTitle>
                <ProjectDescription>In Muarakana Housing Estate</ProjectDescription>
            </ProjectContent>
            {/* svg carousel? */}
            <Overlay>
                <Button type="button">
                    Learn more
                </Button>
            </Overlay>
        </Project>       
    )
}