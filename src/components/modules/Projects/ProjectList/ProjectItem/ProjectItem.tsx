import { FC } from 'react';
import { TProject } from '@types';
import { PUBLIC_URL } from '@constants';
import {
  ImageWrap,
  InfoWrap,
  ProjectType,
  ProjectWrap,
  TechItem,
  TechList,
} from './ProjectItem.styled';
import { ProjectLinks } from './ProjectLinks';

interface IProjectProps {
  project: TProject;
}

export const ProjectItem: FC<IProjectProps> = ({ project }) => {
  const {
    name,
    description,
    technologies,
    isTeamProject,
    image,
    livePageLink,
    repositoryLinks,
    role,
  } = project;

  return (
    <ProjectWrap>
      <ImageWrap>
        <img src={`${PUBLIC_URL}${image}`} alt={name} loading="lazy" />
      </ImageWrap>

      <InfoWrap>
        <h3>{name}</h3>
        <ProjectType $isTeamProject={isTeamProject}>
          {isTeamProject ? 'Team project' : 'Individual project'}
        </ProjectType>

        <TechList>
          {technologies.map((tech, idx) => (
            <TechItem key={idx}>{tech}</TechItem>
          ))}
        </TechList>
        {description.length > 0 && (
          <p>
            <b>About: </b>
            {description}
          </p>
        )}
        {role && (
          <p>
            <b>Responsibility: </b>
            {role}
          </p>
        )}
        <ProjectLinks
          livePageLink={livePageLink}
          repositoryLinks={repositoryLinks}
        />
      </InfoWrap>
    </ProjectWrap>
  );
};
