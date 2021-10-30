// Type (TS) FC
import React, {ChangeEvent, useState} from "react";
import TitleBody from "../bodyApp/titleBody/TitleBody";
import TableFilter from "../bodyApp/table/TableFilter";
import TableElements from "../bodyApp/table/TableElements";
import Paginator from "../bodyApp/paginator/Paginator";
import styled, {css} from "styled-components";

type PropsType = {
    colorSecondary?: string
    colorActive?: string
    backgroundActive?: string
    backgroundElements?: string
    backgroundInput?: string
}

// FC
const Select: React.FC<PropsType> = (props) => {
    // LocalState (counter page)
    let [countSelect, setCountSelect] = useState('25');

    function countSelectHandler(e: ChangeEvent<HTMLSelectElement>) {
        setCountSelect(e.target.value);
    }
    return (
        <StyledSelectWrapper>
            <StyledMockCountSelect backgroundInput={props.backgroundInput} colorSecondary={props.colorSecondary}
                                   colorActive={props.colorActive}>
                {countSelect}
                <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.792893 0.292893C1.18342 -0.0976311 1.81658 -0.0976311 2.20711 0.292893L7.5
                             5.58579L12.7929 0.292893C13.1834 -0.0976311 13.8166 -0.0976311 14.2071
                              0.292893C14.5976 0.683417 14.5976 1.31658 14.2071 1.70711L8.20711 7.70711C7.81658
                               8.09763 7.18342 8.09763 6.79289 7.70711L0.792893 1.70711C0.402369 1.31658 0.402369
                                0.683417 0.792893 0.292893Z"
                        fill=""/>
                </svg>
            </StyledMockCountSelect>
            <StyledCountSelect backgroundInput={props.backgroundInput}
                               onChange={(e) => countSelectHandler(e)}>
                <option>25</option>
                <option>20</option>
                <option>15</option>
                <option>10</option>
            </StyledCountSelect>
            <StyledCountPages>(Всего: 2650)</StyledCountPages>
        </StyledSelectWrapper>
    );
}

export default Select;

// Style
const StyledSelectWrapper = styled.div`
  position: relative;
  display: none;
  @media (min-width: 1920px) {
    display: flex;
    align-items: center;
  }
`
const StyledMockCountSelect = styled.div<PropsType>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 68px;
  height: 44px;
  border-radius: 6px;
  background-color: ${props => props.backgroundInput};
  & path {
    fill: ${props => props.colorSecondary}
  }
  & svg {
    margin-left: 10px;
  }
`
const StyledCountSelect = styled.select<PropsType>`
  position: relative;
  display: block;
  width: 68px;
  height: 44px;
  border-width: 0;
  border-radius: 6px;
  padding-left: 12px;
  background-color: ${props => props.backgroundInput};
  opacity: 0;
  z-index: 2;
`
const StyledCountPages = styled.span`
  display: block;
  margin-left: 20px;
  font-size: 12px;
  font-weight: 400;
`