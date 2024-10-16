import { Container, SocialLink } from '@components/globals';
import {
  HeroSection,
  HeroTextWrap,
  HeroTitle,
  SocialsBox,
} from './Hero.styled';
import GitHubIcon from '@assets/github.svg?react';
import Linkedin from '@assets/linkedin.svg?react';
import { ReactNode } from 'react';

interface ISocialLink {
  name: string;
  href: string;
  iconComponent: ReactNode;
}

const socialLinks: ISocialLink[] = [
  {
    name: 'github',
    href: 'https://github.com/Veronika-chenko',
    iconComponent: <GitHubIcon />,
  },
  {
    name: 'linkedin',
    href: 'https://www.linkedin.com/in/veronika-kravchenko-b02764251/',
    iconComponent: <Linkedin />,
  },
];

export const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <HeroTitle>
          Full-Stack Developer <span>Veronika Kravchenko</span>
        </HeroTitle>
        <HeroTextWrap>
          <p>Welcome to my Portfolio Page!</p>
          <p>
            My focus has been on creating Landing Pages, Webpages and React
            applications. Provide Perfect Appearance and Readable Code.
          </p>
          <p>
            Successfully completed the Full-Stack Developer course at GoIT
            Academy in 2023. During this time, I completed five team projects
            and a series of individual ones.
          </p>
          <p>
            Experienced in both client-side and <br /> server-side development.
          </p>
        </HeroTextWrap>
        <SocialsBox>
          <ul>
            {socialLinks.map(({ name, href, iconComponent }) => (
              <li key={name}>
                <SocialLink href={href}>{iconComponent}</SocialLink>
              </li>
            ))}
          </ul>
        </SocialsBox>
      </Container>
    </HeroSection>
  );
};
