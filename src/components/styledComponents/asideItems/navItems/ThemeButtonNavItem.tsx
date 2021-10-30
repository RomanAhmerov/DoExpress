import React from 'react';
import styled, {css} from "styled-components";


// Type (TS) FC
type PropsType = {
    backgroundActive?: string
    backgroundHover?: string
    itemColor?: string
    itemActiveColor?: string
    fullMode?: boolean
    isActive?: boolean

}

type OptionPropsType = {
    themeMode: string

    changeTheme: (themeMode: string) => void
}


// 🌞🌜

// FC
const ThemeButtonNavItem: React.FC<PropsType & OptionPropsType> = (props) => {
    return (
        <StyledNavItem itemColor={props.itemColor} itemActiveColor={props.itemActiveColor}
                       backgroundHover={props.backgroundHover} backgroundActive={props.backgroundActive}
                       isActive={props.isActive} fullMode={props.fullMode}
                       onClick={() => props.changeTheme(props.themeMode)}
        >
            <StyledNavItemText fullMode={props.fullMode} itemColor={props.itemColor} itemActiveColor={props.itemActiveColor}>Изменить тему </StyledNavItemText>

            <StyledNavItemIcon>
                {props.themeMode == 'day' ? '🌜' : '🌞'}
            </StyledNavItemIcon>
        </StyledNavItem>
    );
}


export default ThemeButtonNavItem;

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
  
  box-shadow: 0 0 3px 0 ${props => props.backgroundActive};

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
    };
  `};
`

const StyledNavItemIcon = styled.div`
  margin-left: 10px;
  width: 20px;
  height: 22px;
`

const StyledNavItemText = styled.span<PropsType>`
  display: block;
  margin-left: 18px;

  color: ${props => props.itemActiveColor};

  ${props => !props.fullMode && css`
    position: absolute;

    visibility: hidden;
  `}
`











