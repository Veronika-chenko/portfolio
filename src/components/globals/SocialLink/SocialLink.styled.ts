import styled from 'styled-components';

export const Link = styled.a`
  display: block;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: grey;

  transition: color var(--transition);

  &:hover {
    color: #1b5fc1;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;
