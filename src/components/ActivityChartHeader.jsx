import React from 'react';
import styled from 'styled-components';
import { ActivityChartLegend } from './ActivityChartLegend';

const StyledHeader = styled.header`
  display: flex;
  gap: 2rem;
`;

const StyledH2 = styled.h2`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: 0.9375rem;
  line-height: 1.5rem;
  margin-right: auto;
`;

export function ActivityChartHeader() {
  return (
    <StyledHeader>
      <StyledH2>Activité quotidienne</StyledH2>
      <ActivityChartLegend color={({ theme }) => theme.colors.secondary}>
        Poids (kg)
      </ActivityChartLegend>
      <ActivityChartLegend color={({ theme }) => theme.colors.primaryDarker}>
        Calories brûlées (kCal)
      </ActivityChartLegend>
    </StyledHeader>
  );
}
