import styled from 'styled-components';

export const CardLinksWrap = styled.div`
  display: flex;
  gap: 12px;
`;

export const CardLink = styled.a`
  position: relative;
  color: #b5b7c2;

  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    content: '';
    width: 100%;
    height: 1px;
    background-color: #b5b7c2;
    border-radius: 2px;
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }

  &:hover,
  &:focus {
    &::after {
      opacity: 1;
    }
  }
`;
