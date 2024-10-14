import { FC, ReactNode } from 'react';
import { Link } from './SocialLink.styled';

interface SocialLinkProps {
  href: string;
  children: ReactNode;
}

export const SocialLink: FC<SocialLinkProps> = ({ href, children }) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  );
};
