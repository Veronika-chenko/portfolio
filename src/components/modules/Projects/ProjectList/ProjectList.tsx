import { FC } from 'react';
import { TProject } from '@types';
import { ProjectsBox } from './ProjectList.styled';
import { ProjectItem } from './ProjectItem';

export interface IProjectListProps {
  projects: TProject[];
}

export const ProjectList: FC<IProjectListProps> = ({ projects }) => {
  return (
    <ProjectsBox>
      {projects?.map(project => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </ProjectsBox>
  );
};
