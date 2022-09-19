import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  display: grid;
  place-items: center;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.white};

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.xl}) {
    width: 2rem;
    height: 2rem;

    & img {
      width: 50%;
    }
  }
`;

export function SportIcon({ imagePath }) {
  return (
    <StyledWrapper>
      <img src={imagePath} alt="" />
    </StyledWrapper>
  );
}

SportIcon.propTypes = {
  imagePath: PropTypes.string.isRequired,
};
