import { MouseEvent, useEffect, useState } from 'react';
import { Projects, Hero, Filters } from '../../components/modules';
import { useFilters } from '../../hooks/useFilters';
import { TFilters, TProject, TProjectTechCategory } from '@types';
import { fetchProjects } from '../../api/fetchProjects';

export const Home = () => {
  const { filters, setTechCategory } = useFilters();
  const [projects, setProjects] = useState<TProject[]>();

  useEffect(() => {
    const getProjects = async () => {
      const projectList = await fetchProjects();
      if (filters.techCategory === 'all') {
        setProjects(projectList);
        return;
      }
      const filteredList = projectList.filter(
        (project: TProject) => project.category === filters.techCategory
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
    <>
      <Hero />
      <Filters
        handleCategoryButtonClick={handleCategoryButtonClick}
        filters={filters as TFilters}
      />
      {projects && <Projects projects={projects} />}
    </>
  );
};
