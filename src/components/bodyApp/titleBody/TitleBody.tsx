import React from 'react';
import styled from "styled-components";


// Type (TS) FC
type PropsType = {
    title: string
    background: string
}

// FC
const TitleBody: React.FC<PropsType> = (props) => {
    return (
        <StyledTitleBodyWrapper background={props.background}>
            <StyledTitleBody>{props.title}</StyledTitleBody>
        </StyledTitleBodyWrapper>
    );
}


export default TitleBody;

// Style
type StyledTitleBodyWrapperType = {
    background: string
}
const StyledTitleBodyWrapper = styled.div<StyledTitleBodyWrapperType>`
  background-color: ${props => props.background};
`


const StyledTitleBody = styled.h2`
  display: flex;
  align-items: center;
  
  font-size: 26px;
  font-weight: 700;
  
  @media (max-width: 767px) {
    margin-left: 16px;
    margin-right: 16px;
    height: 56px;
  }

  @media (min-width: 768px) {
    margin-left: 30px;
    margin-right: 30px;
    height: 74px;
  }
`