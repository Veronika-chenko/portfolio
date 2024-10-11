import { Container } from '../../globals';
import { HeroSection, HeroTitle } from './Hero.styled';

export const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <HeroTitle>
          Full Stack Developer <span>Veronika Kravchenko</span>
        </HeroTitle>
        <p>This is a simple Portfolio Page.</p>
      </Container>
    </HeroSection>
  );
};
