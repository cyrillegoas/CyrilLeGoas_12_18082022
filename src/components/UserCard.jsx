/** @module UserCard */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledFigure = styled.figure`
  background-color: ${({ theme }) => theme.colors.blueTransparent};
  width: 200px;
  height: fit-content;
  padding: 1rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    width: 75%;
  }

  & figcaption {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

/**
 * @typedef userCardProps
 * @type {Object}
 * @property {Number} userId - user id
 */

/**
 * Returns a card with the given user id
 *
 * @param {userCardProps} - props
 * @returns {React.ReactElement|null}
 */
export function UserCard({ userId }) {
  return (
    <StyledFigure>
      <img src="/images/user_icon.svg" alt="user icon" />
      <figcaption>User {userId}</figcaption>
    </StyledFigure>
  );
}
UserCard.propTypes = {
  userId: PropTypes.string.isRequired,
};
