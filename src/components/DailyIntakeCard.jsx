import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colors.greyLight};
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
  background-color: ${({ theme }) => theme.colors.redTransparent};
  border-radius: 6px;
  height: 100%;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;

  &.calorie {
    background-color: ${({ theme }) => theme.colors.redTransparent};
  }
  &.protein {
    background-color: ${({ theme }) => theme.colors.blueTransparent};
  }
  &.lipid {
    background-color: ${({ theme }) => theme.colors.pinkTransparent};
  }
  &.carbohydrate {
    background-color: ${({ theme }) => theme.colors.yellowTransparent};
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
  color: ${({ theme }) => theme.colors.secondary};

  @media screen and ((max-width: ${({ theme }) => theme.breakpoint.xl}) or 
  (max-height: 1024px)) {
    font-size: 0.75rem;
  }
`;

const StyledType = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.grey};

  @media screen and ((max-width: ${({ theme }) => theme.breakpoint.xl}) or 
  (max-height: 1024px)) {
    font-size: 0.525rem;
  }
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
