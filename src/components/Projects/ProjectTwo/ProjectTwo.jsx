import { ProjectTitle, ProjectDescription } from "../Projects.styled";
import { Project, ProjectContent } from "./ProjectTwo.styled";

export const ProjectTwo = () => {
    return (
        <Project>
            <ProjectContent>
                <ProjectTitle>Sparklite App</ProjectTitle>
                <ProjectDescription>Marketplace</ProjectDescription>
            </ProjectContent>
        </Project>      
    )
}