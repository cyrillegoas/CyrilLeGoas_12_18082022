/** @module HorizontalNav */
import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5rem;
  width: 100%;
  & > ul {
    display: flex;
    justify-content: space-between;
  }
`;

/**
 * Returns an horizontal nav for the different page of the app
 *
 * @returns {React.ReactElement}
 */
export function HorizontalNav() {
  const navItems = [
    {
      name: 'Accueil',
      path: '/',
    },
    {
      name: 'Profil',
      path: '/#',
    },
    {
      name: 'Réglage',
      path: '/#',
    },
    {
      name: 'Communauté',
      path: '/#',
    },
  ];

  return (
    <StyledNav>
      <ul>
        {navItems.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </StyledNav>
  );
}
