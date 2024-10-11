export type TProjectTechCategory =
  | 'all'
  | 'html-css-js'
  | 'react'
  | 'fullstack';

export type TProjectType = 'all' | 'individual' | 'team';

export type TFilters = {
  techCategory: TProjectTechCategory;
  type: TProjectType;
};
