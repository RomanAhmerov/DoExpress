import React from 'react';
import styled, {css} from "styled-components";

// Type (TS) FC
type PropsType = {
    backgroundActive?: string
    backgroundHover?: string
    itemText?: string
    itemColor?: string
    itemActiveColor?: string
    fullMode?: boolean
    isActive?: boolean
}

// FC
const FirstNavItem: React.FC<PropsType> = (props) => {
    return (
        <StyledNavItem itemColor={props.itemColor} itemActiveColor={props.itemActiveColor}
                       backgroundHover={props.backgroundHover} backgroundActive={props.backgroundActive}
                       isActive={props.isActive} fullMode={props.fullMode}
        >
            <StyledNavItemIcon>
                {props.children}
            </StyledNavItemIcon>
            <StyledNavItemText fullMode={props.fullMode} itemColor={props.itemColor}>
                {props.itemText}
            </StyledNavItemText>
        </StyledNavItem>
    );
}
export default FirstNavItem;

// Styled
const StyledNavItem = styled.button<PropsType>`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  border-radius: 6px;
  border-width: 0;
  background-color: transparent;
  cursor: pointer;
  @media (max-width: 767px) {
    margin-bottom: 0;
    padding-left: 12px;
    padding-right: 12px;
  }
  & path {
    fill: ${props => props.itemColor};
  }
;

  ${props => props.isActive && css<PropsType>`
    background-color: ${props => props.backgroundActive};
    & path {
      fill: ${props => props.itemActiveColor};
    }
  ;
    & span {
      color: ${props => props.itemActiveColor};
    }
  ;
  `};

  ${props => !props.isActive && css<PropsType>`
    &:hover {
      background-color: ${props => props.backgroundHover};
    }
  ;
    &:hover path {
      fill: ${props => props.itemActiveColor};
    }
  ;

    &:hover span {
      color: ${props => props.itemActiveColor};
    }
  ;
  `};

  ${props => !props.fullMode && css`
    justify-content: center;
    & div {
      margin-left: 0;
    }
  ;
  `};
`
const StyledNavItemIcon = styled.div`
  margin-left: 12px;
  transform: translateY(2px);
`
const StyledNavItemText = styled.span<PropsType>`
  display: block;
  margin-left: 18px;
  color: ${props => props.itemColor};
  ${props => !props.fullMode && css`
    position: absolute;
    visibility: hidden;
  `}
`










