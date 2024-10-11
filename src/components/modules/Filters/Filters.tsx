import { FC, MouseEvent } from 'react';
import { Container } from '../../globals';
import { Section, TechButton, TechList } from './Filters.styled';
import { TFilters, TProjectTechCategory } from '@types';

type OnTechButtonClick = (e: MouseEvent<HTMLElement>) => void;

interface IFiltersProps {
  filters: TFilters;
  handleTechButtonClick: OnTechButtonClick;
}

interface ICategoryButton {
  name: TProjectTechCategory;
  text: string;
}

const buttonList: ICategoryButton[] = [
  { name: 'all', text: 'All' },
  { name: 'html-css-js', text: 'HTML / CSS / JS' },

  { name: 'react', text: 'React' },
  { name: 'fullstack', text: 'FullStack' },
];

export const Filters: FC<IFiltersProps> = ({
  handleTechButtonClick,
  filters,
}) => {
  return (
    <Section>
      <Container>
        <TechList>
          {buttonList.map(({ name, text }) => (
            <TechButton
              key={name}
              name={name as TProjectTechCategory}
              onClick={(e: MouseEvent<HTMLElement>) => handleTechButtonClick(e)}
              $activecategory={filters?.techCategory}
            >
              {text}
            </TechButton>
          ))}
        </TechList>

        {/* <div>
          <div>
            <div>
              <input
                onClick={handleTypeButtonClick}
                type="radio"
                id="all"
                name="projectType"
                value="all"
              />
              <label htmlFor="all">All</label>
            </div>
            <div>
              <input
                onClick={handleTypeButtonClick}
                type="radio"
                id="individual"
                name="projectType"
                value="individual"
              />
              <label htmlFor="individual">Individual</label>
            </div>

            <div>
              <input
                onClick={handleTypeButtonClick}
                type="radio"
                id="team"
                name="projectType"
                value="team"
              />
              <label htmlFor="individual">Team</label>
            </div>
          </div>
        </div> */}
      </Container>
    </Section>
  );
};
