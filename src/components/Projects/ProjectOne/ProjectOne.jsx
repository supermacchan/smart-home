import { ProjectTitle, ProjectDescription } from "../Projects.styled";
import { Project, ProjectContent } from "./ProjectOne.styled";

export const ProjectOne = () => {
    return (
        <Project>
            <ProjectContent>
                <ProjectTitle>Smart Home Installation</ProjectTitle>
                <ProjectDescription>In Muarakana Housing Estate</ProjectDescription>
            </ProjectContent>
            {/* svg carousel? */}
        </Project>       
    )
}