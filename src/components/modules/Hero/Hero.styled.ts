import styled from 'styled-components';
import { devices } from '../../globals';

export const HeroSection = styled.section`
  padding-top: 30px;
  padding-bottom: 30px;
  ${devices.desktop} {
    padding-top: 60px;
  }
`;

export const HeroTitle = styled.h1`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  font-family: Inter, sans-serif;
  font-weight: 700;
  ${devices.tablet} {
    width: 295px;
  }

  span {
    color: #1b5fc1;
    ${devices.tablet} {
      align-self: flex-end;
    }
  }
`;
