import React from 'react';
import styled from 'styled-components';
import { StyledMain } from './styles/StyledMain';
import { DashboardSidebar } from './DashboardSidebar';
import { DashboardCharts } from './DashboardCharts';

const DashboardMain = styled(StyledMain)`
  display: flex;
`;

export function Dashboard() {
  return (
    <DashboardMain>
      <DashboardSidebar />
      <DashboardCharts />
    </DashboardMain>
  );
}
