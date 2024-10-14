import { ReactNode } from 'react';
import { SectionBox } from './Section.styled';

type SectionProps = {
  children: ReactNode;
};

export const Section = ({ children }: SectionProps) => {
  return <SectionBox>{children}</SectionBox>;
};
