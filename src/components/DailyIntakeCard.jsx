import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledCard = styled.div`
  background-color: #fbfbfb;
  width: 100%;
  aspect-ratio: 258 / 128;
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const StyledIconWrapper = styled.div`
  height: 50%;
  aspect-ratio: 1.5/1;
  direction: rtl;
`;

const StyledIconContainer = styled.div`
  background-color: hsla(0, 100%, 50%, 6.61%);
  border-radius: 6px;
  height: 100%;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;

  &.calorie {
    background-color: hsla(0, 100%, 50%, 6.61%);
  }
  &.protein {
    background-color: hsla(203, 100%, 64.5%, 6.61%);
  }
  &.lipid {
    background-color: hsl(343, 97.7%, 65.5%, 6.61%);
  }
  &.carbohydrate {
    background-color: hsl(48, 94.7%, 55.7%, 6.61%);
  }
`;

const StyledIcon = styled.img`
  width: 25%;
`;

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 1.5rem;
`;

const StyledValue = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.125rem;
`;

const StyledType = styled.span`
  font-size: 0.875rem;
  color: #74798c;
`;

export function DailyIntakeCard({ value, type }) {
  let macroType = '';
  switch (type) {
    case 'calorie':
      macroType = 'Calories';
      break;
    case 'protein':
      macroType = 'Proteines';
      break;
    case 'lipid':
      macroType = 'Lipids';
      break;
    case 'carbohydrate':
      macroType = 'Glucides';
      break;

    default:
      macroType = 'unknown type';
      break;
  }

  return (
    <StyledCard>
      <StyledIconWrapper>
        <StyledIconContainer className={type}>
          <StyledIcon src={`/images/${type}_icon.svg`} alt="" />
        </StyledIconContainer>
      </StyledIconWrapper>
      <StyledTextContainer>
        <StyledValue>
          {value}
          {type === 'calorie' ? ' kCal' : ' g'}
        </StyledValue>
        <StyledType>{macroType}</StyledType>
      </StyledTextContainer>
    </StyledCard>
  );
}

DailyIntakeCard.propTypes = {
  value: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};
