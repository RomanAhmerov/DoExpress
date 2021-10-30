import React from 'react';
import styled, {css} from "styled-components";


// Type (TS) FC
type PropsType = {
    colorButton?: string
    colorLine?: string
    currentMode: boolean
    fullMode?: boolean
    itemActiveColor?: string
    onChangeFullMode: (mode: boolean) => void
}

// FC
const RollUpButton: React.FC<PropsType> = (props) => {
    return (
        <StyledRollUpButton onClick={() => props.onChangeFullMode(props.currentMode)} itemActiveColor={props.itemActiveColor}>
            <StyledRollUpButtonTopLine colorLine={props.colorLine}/>

            <StyledRollUpButtonIcon fullMode={props.fullMode}>
                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.20711 0.292893C8.59763 0.683417 8.59763 1.31658 8.20711 1.70711L2.91421 7L8.20711 12.2929C8.59763 12.6834 8.59763 13.3166 8.20711 13.7071C7.81658 14.0976 7.18342 14.0976 6.79289 13.7071L0.792893 7.70711C0.402369 7.31658 0.402369 6.68342 0.792893 6.29289L6.79289 0.292893C7.18342 -0.0976311 7.81658 -0.0976311 8.20711 0.292893Z"
                        fill={props.colorButton}/>
                </svg>
            </StyledRollUpButtonIcon>

            <StyledRollUpButtonText fullMode={props.fullMode} colorButton={props.colorButton}>Свернуть</StyledRollUpButtonText>
        </StyledRollUpButton>
    );
}


export default RollUpButton;

// Style
type StyledRollUpButtonType = {
    itemActiveColor?: string
}
const StyledRollUpButton = styled.button<StyledRollUpButtonType>`
  position: relative;

  display: flex;
  align-items: center;
  padding-top: 22px;
  padding-bottom: 22px;
  width: 100%;
  border-width: 0;

  background-color: transparent;

  cursor: pointer;
  
  &:hover {
    & path {
      fill: ${props => props.itemActiveColor}
    }
    
    & span {
      color: ${props => props.itemActiveColor}
    }
  }
`
type StyledRollUpButtonTopLineType = {
    colorLine?: string
}
const StyledRollUpButtonTopLine = styled.div<StyledRollUpButtonTopLineType>`
  position: absolute;
  top: 0;

  height: 1px;
  width: 100%;
  border-top: 1px solid ${props => props.colorLine};
`

type StyledRollUpButtonIconType = {
    fullMode?: boolean
}
const StyledRollUpButtonIcon = styled.div<StyledRollUpButtonIconType>`
  margin-left: 19px;
  transform: translateY(2px);

  ${props => !props.fullMode && css`
    transform: rotateZ(180deg) translateY(2px);
  `}
`

type StyledRollUpButtonTextType = {
    colorButton?: string
    fullMode?: boolean
}
const StyledRollUpButtonText = styled.span<StyledRollUpButtonTextType>`
  display: block;
  margin-left: 23px;

  color: ${props => props.colorButton};

  ${props => !props.fullMode && css`
    position: absolute;

    visibility: hidden;
  `}
`










