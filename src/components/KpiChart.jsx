import React from 'react';
import styled from 'styled-components';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const StyledKpiWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  place-items: center;
`;

const StyledResponsiveContainer = styled(ResponsiveContainer)`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  min-height: 0;
  min-width: 0;
`;

const StyledLegend = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 60%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: grid;
  place-content: center;
`;

const StyledLegendValue = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.625rem;
  font-weight: bold;
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.xl}) {
    font-size: 1.2rem;
  }
`;

const StyledLegendText = styled.span`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 1rem;
  text-align: center;
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.xl}) {
    font-size: 0.75rem;
  }
`;

const StyledTitle = styled.div`
  width: 100%;
  height: 100%;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  padding: 1.5rem 1.875rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.xl}) {
    padding: 0.75rem 0.9375rem;
  }

  & h2 {
    color: ${({ theme }) => theme.colors.darklue};
    font-size: 0.9375rem;
    line-height: 1.6;

    @media screen and (max-width: ${({ theme }) => theme.breakpoint.xl}) {
      font-size: 0.7rem;
    }
  }
`;

export function KpiChart({ kpi }) {
  const kpiData = [
    {
      value: kpi,
      fill: '#FF0101',
      stroke: 'transparent',
    },
    { value: 1 - kpi, fill: 'transparent', stroke: 'transparent' },
  ];
  return (
    <StyledKpiWrapper>
      <StyledResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={kpiData}
            dataKey="value"
            outerRadius="70%"
            innerRadius="60%"
            startAngle={225}
            endAngle={-45}
          >
            <Cell key="1" cornerRadius="50%" />
            <Cell key="2" cornerRadius="50%" />
          </Pie>
        </PieChart>
      </StyledResponsiveContainer>
      <StyledLegend>
        <StyledLegendValue>{kpi * 100} %</StyledLegendValue>
        <StyledLegendText>
          de votre
          <br />
          objectif
        </StyledLegendText>
      </StyledLegend>
      <StyledTitle>
        <h2>Score</h2>
      </StyledTitle>
    </StyledKpiWrapper>
  );
}
