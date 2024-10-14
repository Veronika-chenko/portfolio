import { devices } from '../../globals';
import styled from 'styled-components';

export const AdvantageList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${devices.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const AdvantageItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;

  h3 {
    font-size: 16px;
    ${devices.tablet} {
      font-size: 18px;
      max-width: 200px;
    }
  }
`;

export const ImageWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  img {
    width: 32px;
    ${devices.desktop} {
      width: 56px;
    }
  }

  &::after {
    position: absolute;
    top: 0px;
    right: -4px;

    display: block;
    z-index: -1;
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 50%;

    background-color: #ffc0cba8;

    ${devices.desktop} {
      top: 4px;
      right: 0;
      width: 28px;
      height: 28px;
    }
  }
`;
