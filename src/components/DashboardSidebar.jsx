import React from 'react';
import styled from 'styled-components';
import { SportIcon } from './SportIcon';

const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.colors.blackish};
  padding: 1.625rem;
  display: grid;
  place-content: center;
  gap: 1.25rem;
  position: relative;
  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.xl}) {
    padding: 0.8125rem;
  }

  &::after {
    content: 'Copyright, SportSee 2020';
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.white};
    width: max-content;
    transform: rotate(270deg);
    transform-origin: 0 50%;
    position: absolute;
    bottom: 0;
    left: 50%;

    @media screen and (max-width: ${({ theme }) => theme.breakpoint.xl}) {
      font-size: 0.375rem;
    }
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
