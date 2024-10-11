import styled from 'styled-components';
import { devices } from '../../globals';

export const ProjectSection = styled.section`
  padding-top: 30px;
  padding-bottom: 30px;
  ${devices.desktop} {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

export const ProjectList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  width: 100%;
  ${devices.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  ${devices.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
