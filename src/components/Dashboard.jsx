import React from 'react';
import styled from 'styled-components';
import { StyledMain } from './styles/StyledMain';
import { DashboardSidebar } from './DashboardSidebar';

const DashboardMain = styled(StyledMain)`
  display: flex;
`;

export function Dashboard() {
  return (
    <DashboardMain>
      <DashboardSidebar />
    </DashboardMain>
  );
}
