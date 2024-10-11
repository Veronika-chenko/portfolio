import styled from 'styled-components';
import { devices, Sizes } from '../styled';

export const ContainerBox = styled.div`
  width: 100%;
  max-width: 100%;
  padding: 0 15px;
  margin: 0 auto;

  @media screen and (min-width: 480px) {
    max-width: 480px;
  }

  ${devices.tablet} {
    max-width: ${Sizes.tablet}px;
  }

  ${devices.desktop} {
    max-width: ${Sizes.desktop}px;
  }
`;
