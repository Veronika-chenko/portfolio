import { ReactNode } from 'react';
import { ContainerBox } from './Container.styled';

type ContainerProps = {
  children: ReactNode;
};

export const Container = ({ children, ...props }: ContainerProps) => {
  return <ContainerBox {...props}>{children}</ContainerBox>;
};
