import { Title } from './SectionTitle.styled';

interface SectionTitleProps {
  title: string;
}

export const SectionTitle = ({ title }: SectionTitleProps) => {
  return <Title>{title}</Title>;
};
