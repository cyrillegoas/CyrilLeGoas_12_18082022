import React from 'react';
import styled from 'styled-components';
import { SportIcon } from './SportIcon';

const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.dashboardSidebar.bgColor};
  padding: 1.625rem;
  display: grid;
  place-content: center;
  gap: 1.25rem;
  position: relative;
  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);

  &::after {
    content: 'Copyright, SportSee 2020';
    font-size: 0.75rem;
    font-weight: 500;
    color: ${({ theme }) => theme.dashboardSidebar.copyrightColor};
    width: max-content;
    transform: rotate(270deg);
    transform-origin: 0 50%;
    position: absolute;
    bottom: 0;
    left: 50%;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export function DashboardSidebar() {
  return (
    <StyledSection>
      <StyledUl>
        <li>
          <SportIcon imagePath="/images/yoga_icon.svg" />
        </li>
        <li>
          <SportIcon imagePath="/images/swimming_icon.svg" />
        </li>
        <li>
          <SportIcon imagePath="/images/bike_icon.svg" />
        </li>
        <li>
          <SportIcon imagePath="/images/dumbbell_icon.svg" />
        </li>
      </StyledUl>
    </StyledSection>
  );
}
