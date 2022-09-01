import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useGetUserData } from '../hooks/useGetUserData';
import { DailyIntake } from './DailyIntake';

const StyledSection = styled.section`
  align-self: flex-start;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    'header header header header'
    'activity activity activity intake'
    'goals radar kpi intake';
  gap: 1.875rem;
  padding: 4.25rem 1.625rem 5.375rem;
`;

const Header = styled.div`
  grid-area: header;

  & h1 {
    font-size: 3rem;
    font-weight: 500;
    line-height: 0.5;
    margin-bottom: 2.5rem;

    & span {
      color: #ff0101;
    }
  }

  & > span {
    font-size: 1.125rem;
    line-height: 1.5;
  }
`;

const StyledContainer = styled.div`
  background-color: #fbfbfb;
  border-radius: 5px;
`;

const Styled1x1 = styled(StyledContainer)`
  aspect-ratio: 1/1;
`;

const Activity = styled(StyledContainer)`
  grid-area: activity;
  aspect-ratio: 832/320;
`;

const Intake = styled(StyledContainer)`
  grid-area: intake;
  background-color: transparent;
`;

const Goals = styled(Styled1x1)`
  background-color: #ff0000;
  grid-area: goals;
`;

const Radar = styled(Styled1x1)`
  background-color: #282d30;
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
        <>
          <Header>
            <h1>
              Bonjour <span>{user.infos.firstName}</span>
            </h1>
            <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
          </Header>
          <Activity />
          <Goals />
          <Radar />
          <Kpi />
          <Intake>
            <DailyIntake macro={user.dailyIntake} />
          </Intake>
        </>
      )}
    </StyledSection>
  );
}
