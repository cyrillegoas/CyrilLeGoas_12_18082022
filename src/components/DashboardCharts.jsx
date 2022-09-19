import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useGetUserData } from '../hooks/useGetUserData';
import { DailyIntake } from './DailyIntake';
import { PerfRadar } from './PerfRadar';
import { KpiChart } from './KpiChart';
import { SessionsChart } from './SessionsChart';
import { ActivityChart } from './ActivityChart';

const StyledSection = styled.section`
  flex-grow: 1;
  padding: 4.25rem 1.625rem;
  display: flex;
  justify-content: center;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, calc(25% - (3 * 1.875rem) / 4));
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    'header header header header'
    'activity activity activity intake'
    'goals radar kpi intake';
  gap: 1.875rem;

  height: 100%;
  max-width: 100%;
  aspect-ratio: 1126 / 779;
`;

const StyledHeader = styled.header`
  grid-area: header;

  & h1 {
    font-size: 3rem;
    line-height: 0.5;
    margin-bottom: 2.5rem;

    & span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  & > span {
    font-size: 1.125rem;
    line-height: 1.5;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.xl}) {
    & h1 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }

    & > span {
      font-size: 0.75rem;
    }
  }
`;

const StyledContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.greyLight};
  border-radius: 5px;
  min-width: 0;
  min-height: 0;
`;

const Styled1x1 = styled(StyledContainer)`
  aspect-ratio: 1/1;
`;

const Activity = styled(StyledContainer)`
  grid-area: activity;
`;

const Intake = styled(StyledContainer)`
  grid-area: intake;
  background-color: transparent;
`;

const Goals = styled(Styled1x1)`
  background-color: ${({ theme }) => theme.colors.primary};
  grid-area: goals;
`;

const Radar = styled(Styled1x1)`
  background-color: ${({ theme }) => theme.colors.secondary};
  grid-area: radar;
`;

const Kpi = styled(Styled1x1)`
  grid-area: kpi;
`;

export function DashboardCharts() {
  const { userId } = useParams();
  const { user, status } = useGetUserData(userId);
  return (
    <StyledSection>
      {status === 'loading' && <h1>Loading</h1>}
      {status === 'error' && <h1>Error</h1>}
      {status === 'ok' && (
        <StyledGrid>
          <StyledHeader>
            <h1>
              Bonjour <span>{user.infos.firstName}</span>
            </h1>
            <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
          </StyledHeader>
          <Activity>
            <ActivityChart activity={user.activity} />
          </Activity>
          <Goals>
            <SessionsChart sessions={user.sessions} />
          </Goals>
          <Radar>
            <PerfRadar perf={user.perf} />
          </Radar>
          <Kpi>
            <KpiChart kpi={user.kpi} />
          </Kpi>
          <Intake>
            <DailyIntake macro={user.dailyIntake} />
          </Intake>
        </StyledGrid>
      )}
    </StyledSection>
  );
}
