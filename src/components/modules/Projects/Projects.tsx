import { MouseEvent, useEffect, useState } from 'react';
import { fetchProjects } from '@api/fetchProjects';
import { TFilters, TProject, TProjectTechCategory } from '@types';
import { useFilters } from '@hooks';
import { Container, Section, SectionTitle } from '@components/globals';
import { ProjectList } from './ProjectList';
import { Filters } from './Filters';

export const Projects = () => {
  const { filters, setTechCategory } = useFilters();
  const [projects, setProjects] = useState<TProject[]>();

  useEffect(() => {
    const getProjects = async () => {
      const projectList = await fetchProjects();
      if (filters.techCategory === 'all') {
        setProjects(projectList);
        return;
      }

      const filteredList = projectList.filter((project: TProject) =>
        project.category.includes(filters.techCategory)
      );
      setProjects(filteredList);
    };
    getProjects();
  }, [filters]);

  const handleCategoryButtonClick = (e: MouseEvent<HTMLElement>) => {
    const { name } = e.target as HTMLButtonElement;
    setTechCategory(name as TProjectTechCategory);
  };
  return (
    <Section>
      <Container>
        <SectionTitle title="Projects" />
        <Filters
          handleCategoryButtonClick={handleCategoryButtonClick}
          filters={filters as TFilters}
        />
        <ProjectList projects={projects as TProject[]} />
      </Container>
    </Section>
  );
};
