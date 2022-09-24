/** @module SessionsChart */
import React from 'react';
import PropTypes from 'prop-types';
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

  @media screen and ((max-width: ${({ theme }) => theme.breakpoint.xl}) or 
  (max-height: 1024px)) {
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

/**
 * @typedef tooltipProps
 * @type {Object}
 * @property {Boolean} active - cursor active flag
 * @property {Array} payload - chart data
 */

/**
 * Returns the tooltip displayed when hovering the chart or null if not active.
 *
 * @param {tooltipProps} - props passed by recharts
 * @returns {React.ReactElement|null}
 */
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

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
    })
  ),
};

CustomTooltip.defaultProps = {
  active: false,
  payload: [],
};

/**
 * @typedef cursorProps
 * @type {Object}
 * @property {Number} height - height of the graph
 * @property {Number} width - width of the graph
 * @property {Number} top - height on top of the graph
 * @property {Number} bottom - height at the bottom of the graph
 * @property {Number} payloadIndex - index of the hovered point in the data array
 * @property {Array} points - point coordinate
 */

/**
 * Returns the cursor displayed when hovering the chart
 *
 * @param {cursorProps} - props passed by recharts
 * @returns {React.ReactElement}
 */
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

CustomCursor.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  top: PropTypes.number,
  bottom: PropTypes.number,
  payloadIndex: PropTypes.number,
  points: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    })
  ),
};

/**
 * @typedef sessionsProps
 * @type {Object}
 * @property {Number} day - day id
 * @property {Number} sessionLength - user sessions duration in minutes
 */

/**
 * Returns a line chart of the user daily sessions
 *
 * @param {sessionsProps} - props
 * @returns {React.ReactElement}
 */
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

SessionsChart.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number,
      sessionLengthday: PropTypes.number,
    })
  ).isRequired,
};
