/** @module ActivityChart */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { ActivityChartHeader } from './ActivityChartHeader';

const StyledActivityWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media screen and ((max-width: ${({ theme }) => theme.breakpoint.xl}) or 
  (max-height: 1024px)) {
    gap: 0.5rem;
  }
`;

const StyledResponsiveContainer = styled(ResponsiveContainer)`
  min-height: 0;
  min-width: 0;
`;

const StyledTooltip = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryDarker};
  padding: 0.25rem 0.75rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  & p {
    font-size: 0.4375rem;
    line-height: 1.5rem;
    color: white;
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
        <p>{`${payload[0].value}Kg`}</p>
        <p>{`${payload[1].value}Kcal`}</p>
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
 * @typedef dailyActivity
 * @type {Object}
 * @property {String} day - date
 * @property {Number} kilogram - daily weight
 * @property {Number} calories - daily calories burned
 */

/**
 * @typedef activityProps
 * @type {Object}
 * @property {Array<{dailyActivity}>} activity - user daily weight and calories burned
 */

/**
 * Returns a bar chart of the user daily activity
 *
 * @param {activityProps} - props passed
 * @returns {React.ReactElement}
 */
export function ActivityChart({ activity }) {
  const activityData = activity.map((item, index) => ({
    tickName: index + 1,
    kilogram: item.kilogram,
    calories: item.calories,
  }));

  const getMinMax = (data, property) =>
    data.reduce((acc, cur, index) => {
      if (!index) {
        return { min: cur[property], max: cur[property] };
      }
      return {
        min: acc.min < cur[property] ? acc.min : cur[property],
        max: acc.max > cur[property] ? acc.max : cur[property],
      };
    }, {});

  const weightLimits = getMinMax(activityData, 'kilogram');
  const caloriesLimits = getMinMax(activityData, 'calories');

  return (
    <StyledActivityWrapper>
      <ActivityChartHeader />
      <StyledResponsiveContainer width="100%" height="100%">
        <BarChart
          data={activityData}
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="4" vertical={false} />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: 'hsla(0, 0%, 77%,50%)' }}
          />
          <Bar
            yAxisId="kilogram"
            dataKey="kilogram"
            fill="#283028"
            barSize={7}
            radius={[50, 50, 0, 0]}
          />
          <Bar
            yAxisId="calories"
            dataKey="calories"
            fill="#E60000"
            barSize={7}
            radius={[50, 50, 0, 0]}
          />

          <XAxis
            dataKey="tickName"
            axisLine={false}
            tickLine={false}
            stroke="#9B9EAC"
            fontSize={14}
            height={40}
            dy={18}
          />
          <YAxis
            yAxisId="kilogram"
            orientation="right"
            axisLine={false}
            tickLine={false}
            domain={[weightLimits.min - 1, weightLimits.max + 1]}
            width="70"
            dx={45}
            stroke="#9B9EAC"
            fontSize={14}
          />
          <YAxis
            yAxisId="calories"
            orientation="left"
            domain={[caloriesLimits.min - 10, caloriesLimits.max + 10]}
            hide
          />
        </BarChart>
      </StyledResponsiveContainer>
    </StyledActivityWrapper>
  );
}

ActivityChart.propTypes = {
  activity: PropTypes.arrayOf(
    PropTypes.shape({
      kilogram: PropTypes.number,
      calories: PropTypes.number,
      day: PropTypes.string,
    })
  ).isRequired,
};
