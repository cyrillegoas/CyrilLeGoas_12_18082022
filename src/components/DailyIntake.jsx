/** @module DailyIntake */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { DailyIntakeCard } from './DailyIntakeCard';

const StyledContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

/**
 * @typedef dailyIntakeProps
 * @type {Object}
 * @property {Number} calorie - daily calorie intake in kCal
 * @property {Number} protein - daily protein intake in g
 * @property {Number} lipid - daily lipid intake in g
 * @property {Number} carbohydrate - daily carbohydrate intake in g
 */

/**
 * Returns a card for each type of macro
 *
 * @param {dailyIntakeProps} - props
 * @returns {React.ReactElement}
 */
export function DailyIntake({ macro }) {
  return (
    <StyledContainer>
      <DailyIntakeCard type="calorie" value={macro.calorie} />
      <DailyIntakeCard type="protein" value={macro.protein} />
      <DailyIntakeCard type="lipid" value={macro.lipid} />
      <DailyIntakeCard type="carbohydrate" value={macro.carbohydrate} />
    </StyledContainer>
  );
}

DailyIntake.propTypes = {
  macro: PropTypes.shape({
    calorie: PropTypes.number,
    protein: PropTypes.number,
    lipid: PropTypes.number,
    carbohydrate: PropTypes.number,
  }).isRequired,
};
