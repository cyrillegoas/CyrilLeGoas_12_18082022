import React from 'react';
import styled from 'styled-components';
import { ActivityChartHeader } from './ActivityChartHeader';

const StyledActivityWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 1.5rem;
`;

export function ActivityChart() {
  return (
    <StyledActivityWrapper>
      <ActivityChartHeader />
    </StyledActivityWrapper>
  );
}
