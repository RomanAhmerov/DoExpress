import React from 'react';
import styled from "styled-components";


// Type (TS) FC
type PropsType = {
    backgroundInput?: string
    colorSecondary?: string
    title?: string
}

// FC
const FilterButton = (props: PropsType) => {
    return (
        <StyledFilterButton>
            <StyledFilterButtonTitle colorSecondary={props.colorSecondary}>{props.title}</StyledFilterButtonTitle>

            <StyledFilterButtonIconsWrapper>
                <StyledArrowUpIcon backgroundInput={props.backgroundInput}>
                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.66671 3.66667L4.00004 1L1.33337 3.66667" stroke=""/>
                    </svg>
                </StyledArrowUpIcon>

                <StyledArrowDownIcon colorSecondary={props.colorSecondary}>
                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.33337 1.33333L4.00004 4L6.66671 1.33333" stroke=""/>
                    </svg>
                </StyledArrowDownIcon>
            </StyledFilterButtonIconsWrapper>
        </StyledFilterButton>
    );
};


export default FilterButton;


// Style
const StyledFilterButton = styled.button`
  display: flex;
  align-items: center;
  
  padding-right: 10px;
`

const StyledFilterButtonTitle = styled.span<PropsType>`
  display: block;

  font-size: 12px;
  font-weight: 700;
  color: ${props => props.colorSecondary};
`

const StyledFilterButtonIconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  transform: translate(5px, -8px);
`

const StyledArrowUpIcon = styled.div<PropsType>`
  height: 5px;

  & path {
    stroke: ${props => props.backgroundInput};
  }
`

const StyledArrowDownIcon = styled.div<PropsType>`
  height: 5px;

  & path {
    stroke: ${props => props.colorSecondary};
  }
`






