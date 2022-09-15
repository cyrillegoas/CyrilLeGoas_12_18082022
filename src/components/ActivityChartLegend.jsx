import React from 'react';
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
  background-color: ${(props) => props.color};
`;

const StyledText = styled.span`
  font-size: 0.875rem;
  color: #74798c;
`;

export function ActivityChartLegend({ color, children }) {
  return (
    <StyledWrapper>
      <Dot color={color} />
      <StyledText>{children}</StyledText>
    </StyledWrapper>
  );
}
