import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  display: grid;
  place-content: center;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.sportIcon.bgColor};
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
