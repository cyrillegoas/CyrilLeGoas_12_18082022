import React from 'react';
import styled from 'styled-components';
import {
  LineChart,
  Line,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

const StyledSessionWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const StyledTitle = styled.h2`
  font-size: 0.9375rem;
  color: hsla(0, 0%, 100%, 0.5);
  top: 2rem;
  left: 2rem;
  position: absolute;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.xl}) {
    top: 1rem;
    left: 1rem;
    font-size: 0.7rem;
  }
`;

const StyledTooltip = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0.5rem;
  & p {
    font-size: 0.5rem;
  }
`;

function CustomTooltip({ active, payload }) {
  if (active && payload) {
    return (
      <StyledTooltip>
        <p>{`${payload[0].value} min`}</p>
      </StyledTooltip>
    );
  }
  return null;
}

function CustomCursor({ height, width, top, bottom, payloadIndex, points }) {
  const dayWidth = width / 6;
  const cursorStart = points[0].x;
  const cursorWidth = dayWidth * (6 - payloadIndex);

  return (
    <rect
      width={cursorWidth}
      height={height + top + bottom}
      x={cursorStart}
      style={{
        fill: 'hsla(0, 0%, 0%, 9.75%)',
        strokeWidth: 3,
        stroke: 'transparent',
        left: '318px',
        position: 'relative',
      }}
    />
  );
}

export function SessionsChart({ sessions }) {
  const weekDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  const sessionsData = sessions.map((session, index) => ({
    day: weekDays[index],
    length: session.sessionLength,
  }));
  const maxSessionLength = sessionsData
    .map((session) => session.length)
    .reduce((acc, cur) => (cur > acc ? cur : acc));

  return (
    <StyledSessionWrapper>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={sessionsData}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
          <Line
            type="monotoneX"
            dataKey="length"
            stroke="#FFFFFF"
            strokeWidth={2}
            dot={false}
            activeDot={{
              r: 4,
              strokeWidth: 8,
              stroke: 'hsla(0, 0%, 100%, 0.3)',
            }}
          />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            stroke="hsla(0, 0%, 100%, 0.5)"
          />
          <YAxis hide domain={[0, maxSessionLength + 20]} />
        </LineChart>
      </ResponsiveContainer>
      <StyledTitle>
        Durée moyenne des
        <br />
        sessions
      </StyledTitle>
    </StyledSessionWrapper>
  );
}
