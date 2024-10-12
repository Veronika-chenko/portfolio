import styled from 'styled-components';
import { devices } from '../../../globals';

interface ProjectTypeProps {
  $isTeamProject: boolean;
}

export const ProjectWrap = styled.li`
  width: 100%;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 10px #0000000d;

  ${devices.tablet} {
    display: flex;
    flex-direction: column;
    height: 100%;
    transition: transform var(--transition);

    &:hover {
      transform: translateY(-12px);
    }
  }
`;

export const ImageWrap = styled.div`
  width: 100%;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  ${devices.tablet} {
    height: 250px;
  }
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
  /* background-color: #fff; */
  flex-grow: 1;
`;

export const ProjectType = styled.p<ProjectTypeProps>`
  color: ${p => (p.$isTeamProject ? '#FF5733' : 'inherit')};
`;

export const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const TechItem = styled.li`
  padding: 2px 12px;
  border-radius: 4px;
  border-radius: 50px;
  background-color: #b5b7c2;
  color: #ffffff;
  box-shadow: 1px 2px 2px grey;
`;
