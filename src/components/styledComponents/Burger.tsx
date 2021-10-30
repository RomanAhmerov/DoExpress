import React from 'react';
import styled, {css} from "styled-components";

// Type (TS) FC
type PropsType = {
    colorBurger?: string

    currentMode: boolean
    fullMode?: boolean
    onChangeFullMode: (mode: boolean) => void
}

// FC
const Burger: React.FC<PropsType> = (props) => {
    return (
        <StyledBurgerButton onClick={() => props.onChangeFullMode(props.currentMode)} fullMode={props.fullMode}>
            <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0.974854 1.9749C0.974854 1.42261 1.42257 0.974899 1.97485 0.974899H17.9749C18.5272 0.974899 18.9749 1.42261 18.9749 1.9749C18.9749 2.52718 18.5272 2.9749 17.9749 2.9749H1.97485C1.42257 2.9749 0.974854 2.52718 0.974854 1.9749ZM0.974854 7.9749C0.974854 7.42262 1.42257 6.9749 1.97485 6.9749H17.9749C18.5272 6.9749 18.9749 7.42262 18.9749 7.9749C18.9749 8.52718 18.5272 8.9749 17.9749 8.9749H1.97485C1.42257 8.9749 0.974854 8.52718 0.974854 7.9749ZM0.974854 13.9749C0.974854 13.4226 1.42257 12.9749 1.97485 12.9749H17.9749C18.5272 12.9749 18.9749 13.4226 18.9749 13.9749C18.9749 14.5272 18.5272 14.9749 17.9749 14.9749H1.97485C1.42257 14.9749 0.974854 14.5272 0.974854 13.9749Z"
                    fill={props.colorBurger}/>
            </svg>
        </StyledBurgerButton>
    );
}

export default Burger;

// Style
type StyledBurgerButtonType = {
    fullMode?: boolean
}
const StyledBurgerButton = styled.button<StyledBurgerButtonType>`
  border-width: 0;
  background-color: transparent;  
  
  ${props => !props.fullMode && css`
    transform: rotateZ(90deg);
  `}
`









