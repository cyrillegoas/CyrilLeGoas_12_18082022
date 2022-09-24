/** @module Dashboard */
import React from 'react';
import styled from 'styled-components';
import { StyledMain } from './styles/StyledMain';
import { DashboardSidebar } from './DashboardSidebar';
import { DashboardCharts } from './DashboardCharts';

const DashboardMain = styled(StyledMain)`
  display: flex;
`;

/**
 * Returns a dashboard made up of a sidenav and a grid of charts
 *
 * @returns {React.ReactElement}
 */
export function Dashboard() {
  return (
    <DashboardMain>
      <DashboardSidebar />
      <DashboardCharts />
    </DashboardMain>
  );
}
