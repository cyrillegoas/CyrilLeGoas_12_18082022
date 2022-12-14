/** @module UserSelector */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StyledMain } from './styles/StyledMain';
import { UserCard } from './UserCard';

const UserSelectorMain = styled(StyledMain)`
  display: grid;
  place-content: center;

  & ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  & a {
    color: ${({ theme }) => theme.colors.black};
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

/**
 * Returns a list of users and their cards
 *
 * @returns {React.ReactElement|null}
 */
export function UserSelector() {
  const ids = [12, 18, 77, 88, 99];
  return (
    <UserSelectorMain>
      <ul>
        {ids.map((id) => (
          <li key={id}>
            <Link to={`/user/${id}`} aria-label={`user ${id}'s dashboard`}>
              <UserCard userId={`${id}`} />
            </Link>
          </li>
        ))}
      </ul>
    </UserSelectorMain>
  );
}
