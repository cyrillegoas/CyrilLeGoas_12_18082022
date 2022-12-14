/** @module Header */
import React from 'react';
import styled from 'styled-components';
import { HorizontalNav } from './HorizontalNav';

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.blackish};
  height: 5.625rem; // TODO need a variable
  padding: 0 5.75rem 0 1.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & img {
    margin-right: 9rem;
  }
`;

/**
 * Returns the page header (logo + nav)
 *
 * @returns {React.ReactElement}
 */
export function Header() {
  return (
    <StyledHeader>
      <img src="/images/sportsee_logo.svg" alt="sportsee logo" />
      <HorizontalNav />
    </StyledHeader>
  );
}
