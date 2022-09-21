import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const Dot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${(props) => props.dotColor};
`;

const StyledText = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.grey};
`;

export function ActivityChartLegend({ color, children }) {
  return (
    <StyledWrapper>
      <Dot dotColor={color} />
      <StyledText>{children}</StyledText>
    </StyledWrapper>
  );
}

ActivityChartLegend.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  children: PropTypes.node.isRequired,
};
