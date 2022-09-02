import React from 'react';
import styled from 'styled-components';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  PolarRadiusAxis,
} from 'recharts';

const StyledResponsiveContainer = styled(ResponsiveContainer)`
  & .recharts-polar-grid-angle line {
    stroke: transparent;
  }
  & .recharts-polar-grid-concentric path {
    stroke: white;
    stroke-width: 2;
  }
  & .recharts-polar-angle-axis text {
    fill: white;
    font-size: 0.75rem;
    font-weight: 500;
  }
`;

export function PerfRadar({ perf }) {
  const radarData = perf.map((item) => ({
    type: item.type,
    value: item.value,
  }));

  return (
    <StyledResponsiveContainer>
      <RadarChart cx="50%" cy="50%" outerRadius="68%" data={radarData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="type" dy={2} />
        <PolarRadiusAxis domain={[0, 260]} stroke="transparent" />
        <Radar
          dataKey="value"
          stroke="transparent"
          fill="#FF0101"
          fillOpacity={0.7}
        />
      </RadarChart>
    </StyledResponsiveContainer>
  );
}
