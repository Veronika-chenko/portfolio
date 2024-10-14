import { FC, MouseEvent } from 'react';
import { TechButton, CategoryList } from './Filters.styled';
import { TFilters, TProjectTechCategory } from '@types';

type OnCategoryButtonClick = (e: MouseEvent<HTMLElement>) => void;

export interface IFiltersProps {
  filters: TFilters;
  handleCategoryButtonClick: OnCategoryButtonClick;
}

interface ICategoryButton {
  name: TProjectTechCategory;
  text: string;
}

const categoryButtonList: ICategoryButton[] = [
  { name: 'all', text: 'All' },
  { name: 'html-css-js', text: 'HTML / CSS / JS' },

  { name: 'react', text: 'React' },
  { name: 'fullstack', text: 'FullStack' },
];

export const Filters: FC<IFiltersProps> = ({
  handleCategoryButtonClick,
  filters,
}) => {
  return (
    <CategoryList>
      {categoryButtonList.map(({ name, text }) => (
        <TechButton
          key={name}
          name={name as TProjectTechCategory}
          onClick={(e: MouseEvent<HTMLElement>) => handleCategoryButtonClick(e)}
          $activecategory={filters?.techCategory}
        >
          {text}
        </TechButton>
      ))}
    </CategoryList>
  );
};
