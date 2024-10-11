import { FC } from 'react';
import { TRepositoryLinks } from '@types';
import { CardLink, LinksWrap } from './RepositoryLinks.styled';

interface RepositoryLinksProps {
  repositoryLinks: TRepositoryLinks;
}

const ExternalLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <CardLink href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </CardLink>
  );
};

export const RepositoryLinks: FC<RepositoryLinksProps> = ({
  repositoryLinks,
}) => {
  const { frontend, backend } = repositoryLinks;

  if (frontend.length > 0 && backend.length > 0) {
    return (
      <LinksWrap>
        <ExternalLink href={frontend}>Frontend</ExternalLink>
        <ExternalLink href={backend}>Backend</ExternalLink>
      </LinksWrap>
    );
  }

  if (frontend.length > 0 && backend.length === 0) {
    return <ExternalLink href={frontend}>GitHub</ExternalLink>;
  }

  if (backend.length > 0 && frontend.length === 0) {
    return <ExternalLink href={backend}>GitHub</ExternalLink>;
  }

  return null;
};
