import { FC } from 'react';
import { TProject } from '@types';
import {
  CardLink,
  ImageWrap,
  InfoWrap,
  LinksWrap,
  ProjectWrap,
  TechItem,
  TechList,
} from './ProjectItem.styled';
import { RepositoryLinks } from './RepositoryLinks';

interface IProjectProps {
  project: TProject;
}

export const ProjectItem: FC<IProjectProps> = ({ project }) => {
  const {
    // id,
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
        <img src={image} alt={name} />
      </ImageWrap>

      <InfoWrap>
        <h3>{name}</h3>
        <p>{isTeamProject ? 'Team project' : 'Individual project'}</p>
        <TechList>
          {technologies.map((tech, idx) => (
            // <TechItem key={idx} backgroundColor={createKeyWordForStyling(tech)}>
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
        <LinksWrap>
          <p>
            <b>Links:</b>
          </p>
          {livePageLink.length > 0 && (
            <CardLink href={livePageLink}>Live page</CardLink>
          )}
          <RepositoryLinks repositoryLinks={repositoryLinks} />
        </LinksWrap>
      </InfoWrap>
    </ProjectWrap>
  );
};
