import { devices } from '@components/globals';
import styled from 'styled-components';

export const ProjectsBox = styled.ul`
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
