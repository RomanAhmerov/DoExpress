// Type (TS) FC
import React from "react";
import TitleBody from "../bodyApp/titleBody/TitleBody";
import TableFilter from "../bodyApp/table/TableFilter";
import TableElements from "../bodyApp/table/TableElements";
import Paginator from "../bodyApp/paginator/Paginator";
import styled, {css} from "styled-components";

type StyledCheckBoxWrapperType = {
    id?: number
    isCheck: boolean
    backgroundCheckbox: string
    backgroundCheckboxActive: string
    backgroundElements: string
}

type StyledCheckBoxWrapperCSSType = {
    backgroundCheckboxActive: string
    backgroundElements: string
}

// FC
const CheckBox: React.FC<StyledCheckBoxWrapperType> = (props) => {
    return (
        <StyledCheckBoxWrapper backgroundCheckbox={props.backgroundCheckbox}
                               backgroundCheckboxActive={props.backgroundCheckboxActive} isCheck={props.isCheck}
                               backgroundElements={props.backgroundElements}>
            <StyledCheckBoxIcon>
                <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5.70711 9.29289L15 0L16.4142 1.41421L5.70711 12.1213L0 6.41421L1.41421 5L5.70711
                                 9.29289Z" fill=""/>
                </svg>
            </StyledCheckBoxIcon>

            <StyledCheckBox onClick={(e) => e.stopPropagation()}
                            name={`Element ${props.id}`}
                            type='checkbox'/>
        </StyledCheckBoxWrapper>
    );
}

export default CheckBox;

// Style
const StyledCheckBoxWrapper = styled.div<StyledCheckBoxWrapperType>`
  margin-right: 16px;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background-color: ${props => props.backgroundCheckbox};

  @media (min-width: 1400px) {
    margin-top: 5px;
  }

  & path {
    fill: transparent;
  }

  ${props => props.isCheck && css<StyledCheckBoxWrapperCSSType>`
    background-color: ${props => props.backgroundCheckboxActive};

    & path {
      fill: ${props => props.backgroundElements}
    }
  `}
`

const StyledCheckBoxIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`

const StyledCheckBox = styled.input`
  width: 24px;
  height: 24px;
  opacity: 0;
`