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

  & h2 {
    font-size: 0.9375rem;
    font-weight: 500;
    color: #20253a;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
`;

const StyledResponsiveContainer = styled(ResponsiveContainer)`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  min-height: 0;
  min-width: 0;
`;

const StyledLegend = styled.div`
  background-color: white;
  width: 60%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: grid;
  place-content: center;
`;

const StyledLegendValue = styled.span`
  color: #282d30;
  font-size: 1.625rem;
  font-weight: bold;
`;

const StyledLegendText = styled.span`
  color: #74798c;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
`;

const StyledTitle = styled.div`
  width: 100%;
  height: 100%;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  padding: 1.5rem 1.875rem;

  & h2 {
    color: #20253a;
    font-size: 0.9375rem;
    font-weight: 500;
    line-height: 1.6;
  }
`;

export function KpiChart({ kpi }) {
  const kpiData = [
    { value: kpi, fill: '#FF0000', stroke: 'transparent' },
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
