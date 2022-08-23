import React from 'react';
import styled from 'styled-components';
import { HorizontalNav } from './HorizontalNav';

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.header.bgColor};
  padding: 1.125rem 5.75rem 0.75rem 1.75rem;
  & .wrapper {
    display: flex;
    align-items: center;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & img {
    margin-right: 9rem;
  }
`;

export function Header() {
  return (
    <StyledHeader>
      <StyledWrapper>
        <img src="/images/sportsee_logo.svg" alt="sportsee logo" />
        <HorizontalNav />
      </StyledWrapper>
    </StyledHeader>
  );
}
