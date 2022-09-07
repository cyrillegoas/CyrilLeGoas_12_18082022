import React from 'react';
import styled from 'styled-components';
import { ActivityChartLegend } from './ActivityChartLegend';

const StyledHeader = styled.header`
  display: flex;
  gap: 2rem;
`;

const StyledH2 = styled.h2`
  color: #20253a;
  font-size: 0.9375rem;
  font-weight: 500;
  line-height: 1.5rem;
  margin-right: auto;
`;

export function ActivityChartHeader() {
  return (
    <StyledHeader>
      <StyledH2>Activité quotidienne</StyledH2>
      <ActivityChartLegend color="#979797">Poids (kg)</ActivityChartLegend>
      <ActivityChartLegend color="#E60000">
        Calories brûlées (kCal)
      </ActivityChartLegend>
    </StyledHeader>
  );
}
