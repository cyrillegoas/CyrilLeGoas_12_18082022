import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { UserCard } from './UserCard';

const StyledMain = styled.main`
  flex-grow: 1;
  display: grid;
  place-content: center;

  & ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  & a {
    color: black;
    text-decoration: none;
  }

  & li {
    transform: scale(1);
    transition: transform 0.3s ease;
  }

  & li:hover {
    transform: scale(1.05);
  }
`;

export function UserSelector() {
  const ids = [12, 18, 99];
  return (
    <StyledMain>
      <ul>
        {ids.map((id) => (
          <li key={id}>
            <Link to={`/user/${id}`} aria-label={`user ${id}'s dashboard`}>
              <UserCard userId={`${id}`} />
            </Link>
          </li>
        ))}
      </ul>
    </StyledMain>
  );
}
