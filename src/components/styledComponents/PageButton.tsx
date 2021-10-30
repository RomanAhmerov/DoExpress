// Type (TS) FC
import React from "react";
import styled, {css} from "styled-components";

type PropsType = {
    colorSecondary?: string
    colorActive?: string
    backgroundActive?: string
    backgroundElements?: string
    backgroundInput?: string
    isActive?: boolean
}

// FC
const PageButton: React.FC<PropsType> = (props) => {
    return (
        <StyledPageButton {...props}>
            {props.children}
        </StyledPageButton>
    );
}

export default PageButton;

// Style
type StyledPageButtonActiveCSSType = {
    colorActive?: string
    backgroundActive?: string
}

const StyledPageButton = styled.button<PropsType>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 6px;
  border-width: 0;
  margin: 0 5px;
  font-size: 15px;
  font-weight: 700;
  color: ${props => props.colorSecondary};

  &:hover {
    background-color: ${props => props.backgroundElements};
  }

  ${props => props.isActive && css<StyledPageButtonActiveCSSType>`
    color: ${props => props.colorActive};
    background-color: ${props => props.backgroundActive};

    &:hover {
      background-color: ${props => props.backgroundActive};
    }
  `};
`