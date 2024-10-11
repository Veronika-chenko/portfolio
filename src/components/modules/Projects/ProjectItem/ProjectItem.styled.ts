import styled from 'styled-components';
import { devices } from '../../../globals';

export const ProjectWrap = styled.li`
  width: 100%;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 10px #0000000d;
  ${devices.tablet} {
    display: flex;
    flex-direction: column;
    height: 100%;
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
  background-color: #fff;
  flex-grow: 1;
`;

export const LinksWrap = styled.div`
  display: flex;
  gap: 12px;
`;

export const CardLink = styled.a`
  position: relative;
  color: #b5b7c2;

  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    content: '';
    width: 100%;
    height: 1px;
    background-color: #b5b7c2;
    border-radius: 2px;
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }

  &:hover,
  &:focus {
    &::after {
      opacity: 1;
    }
  }
`;

// ////////////////
export const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
////////////
interface TechItemProps {
  backgroundColor?: string;
}

export const TechItem = styled.li<TechItemProps>`
  padding: 2px 8px;
  border-radius: 4px;
  background-color: #b5b7c2;
  color: #ffffff;
  box-shadow: 1px 2px 2px grey;
  cursor: pointer;

  transition: background-color 250ms linear;

  &:hover {
    background-color: ${p =>
      p.backgroundColor ? p.backgroundColor : '#b5b7c2'};
  }
`;
