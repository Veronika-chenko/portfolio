import styled from 'styled-components';
import { TProjectTechCategory } from '@types';

export const Section = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    gap: 30px;
  }
`;

export const TechList = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;
`;

interface ButtonProps {
  $activecategory?: TProjectTechCategory;
}

export const TechButton = styled.button<ButtonProps>`
  padding: 8px 16px;
  border-radius: 4px;
  background-color: #b5b7c2;
  background-color: ${p =>
    p.$activecategory === p.name ? 'green' : '#b5b7c2'};
  color: #ffffff;
  box-shadow: 1px 2px 2px grey;
  cursor: pointer;

  font-size: 16px;
  font-weight: 600;
  width: max-content;

  transition: background-color 250ms linear;

  &:hover,
  &:active {
    background-color: '#b5b7c2';
  }
`;
