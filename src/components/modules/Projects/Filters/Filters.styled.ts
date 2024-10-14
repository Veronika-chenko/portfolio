import styled from 'styled-components';
import { TProjectTechCategory } from '@types';

export const CategoryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;

  margin-bottom: 60px;
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

  transition: background-color var(--transition), box-shadow var(--transition);

  &:hover {
    box-shadow: 0px 1px 1px grey;
  }

  &:active {
    background-color: '#b5b7c2';
  }
`;
