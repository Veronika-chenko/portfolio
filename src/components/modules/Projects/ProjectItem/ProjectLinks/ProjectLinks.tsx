import { FC } from 'react';
import { TRepositoryLinks } from '@types';
import { CardLink, CardLinksWrap } from './ProjectLinks.styled';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

interface RepositoryLinksProps {
  repositoryLinks: TRepositoryLinks;
}

interface ProjectLinksProps {
  livePageLink: string;
  repositoryLinks: TRepositoryLinks;
}

const ExternalLink: FC<ExternalLinkProps> = ({ href, children }) => {
  return (
    <CardLink href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </CardLink>
  );
};

const RepositoryLinks: FC<RepositoryLinksProps> = ({ repositoryLinks }) => {
  const { frontend, backend } = repositoryLinks;

  if (frontend && backend) {
    return (
      <>
        <ExternalLink href={frontend}>Frontend</ExternalLink>
        <ExternalLink href={backend}>Backend</ExternalLink>
      </>
    );
  }

  if (frontend) {
    return <ExternalLink href={frontend}>GitHub</ExternalLink>;
  }

  if (backend) {
    return <ExternalLink href={backend}>GitHub</ExternalLink>;
  }

  return null;
};

export const ProjectLinks: FC<ProjectLinksProps> = ({
  livePageLink,
  repositoryLinks,
}) => {
  return (
    <CardLinksWrap>
      <p>
        <b>Links:</b>
      </p>
      {livePageLink && (
        <ExternalLink href={livePageLink}>Live page</ExternalLink>
      )}
      <RepositoryLinks repositoryLinks={repositoryLinks} />
    </CardLinksWrap>
  );
};
