import { TProjectTechCategory } from './Filters';

export type TRepositoryLinks = {
  frontend: string;
  backend: string;
};

export type TProject = {
  id: number;
  name: string;
  category: TProjectTechCategory;
  description: string;
  technologies: string[];
  isTeamProject: boolean;
  image: string;
  livePageLink: string;
  repositoryLinks: TRepositoryLinks;
  role?: string;
};
