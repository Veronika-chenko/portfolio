import { Container } from '../../globals';
import { ProjectSection, ProjectList } from './Projects.styled';
import { ProjectItem } from './ProjectItem';
import { FC } from 'react';
import { TProject } from '@types';

interface IProjectProps {
  projects: TProject[];
}

export const Projects: FC<IProjectProps> = ({ projects }) => {
  return (
    <ProjectSection>
      <Container>
        <ProjectList>
          {projects?.map(project => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </ProjectList>
      </Container>
    </ProjectSection>
  );
};
