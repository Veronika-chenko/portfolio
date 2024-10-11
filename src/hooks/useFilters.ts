import { useCallback, useState } from 'react';
import { TProjectTechCategory, TProjectType } from '@types';

const initialFilterState = {
  techCategory: 'all',
  type: 'all',
};

export const useFilters = () => {
  const [filters, setFilters] = useState(initialFilterState);

  const setTechCategory = useCallback(
    (techCategory: TProjectTechCategory) => {
      setFilters({
        ...filters,
        techCategory,
      });
    },
    [filters]
  );

  const setType = useCallback(
    (type: TProjectType) => {
      setFilters({
        ...filters,
        type,
      });
    },
    [filters]
  );

  return { filters, setTechCategory, setType };
};
