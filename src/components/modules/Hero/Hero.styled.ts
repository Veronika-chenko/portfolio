import styled from 'styled-components';
import { devices } from '../../globals';

export const HeroSection = styled.section`
  padding-top: 30px;
  padding-bottom: 30px;
  ${devices.desktop} {
    padding-top: 60px;
  }

  & > div {
    position: relative;
  }
`;

export const HeroTitle = styled.h1`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  font-size: 32px;
  font-weight: 700;
  ${devices.tablet} {
    width: 395px;
  }

  span {
    color: #1b5fc1;
    ${devices.tablet} {
      padding-left: 68px;
    }
  }
`;

export const HeroTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${devices.tablet} {
    max-width: 59%;
  }
  ${devices.desktop} {
    max-width: 50%;
  }

  p {
    font-size: 18px;
  }
`;

//////////////

export const SocialsBox = styled.div`
  ${devices.tablet} {
    position: absolute;
    top: 0;
    right: 0;
  }
  ul {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-top: 24px;

    ${devices.tablet} {
      flex-direction: column;
    }
  }
`;
