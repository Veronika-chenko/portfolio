import { Container } from '../../globals';
import { HeroSection, HeroTextWrap, HeroTitle } from './Hero.styled';

export const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <HeroTitle>
          Full Stack Developer <span>Veronika Kravchenko</span>
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
      </Container>
    </HeroSection>
  );
};
