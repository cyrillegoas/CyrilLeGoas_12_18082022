import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  color: ${({ theme }) => theme.nav.color};
  font-size: 1.5rem;
  width: 100%;
  & > ul {
    display: flex;
    justify-content: space-between;
  }
`;

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
