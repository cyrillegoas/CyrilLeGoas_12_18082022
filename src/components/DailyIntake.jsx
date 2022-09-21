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
