import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useGetUserData } from '../hooks/useGetUserData';

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header header header header'
    'activity activity activity intake'
    'goals radar kpi intake';
  gap: 1.875rem;
  padding: 4.25rem 1.625rem 5.375rem;
`;

const Header = styled.div`
  background-color: palegreen;
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

const Activity = styled.div`
  background-color: rebeccapurple;
  grid-area: activity;
`;
const Goals = styled.div`
  background-color: goldenrod;
  grid-area: goals;
  aspect-ratio: 1/1;
`;
const Radar = styled.div`
  background-color: tomato;
  grid-area: radar;
  aspect-ratio: 1/1;
`;
const Kpi = styled.div`
  background-color: hotpink;
  grid-area: kpi;
  aspect-ratio: 1/1;
`;
const Intake = styled.div`
  background-color: forestgreen;
  grid-area: intake;
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
          <Intake />
        </>
      )}
    </StyledSection>
  );
}
