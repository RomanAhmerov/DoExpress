import React from "react";
import styled, {css} from "styled-components";

// Type (TS) FC
type PropsType = {
    text: string
    author: string
    date: string
    time: string
    position: string
    colorSecondary: string
}

// FC
const TextElement: React.FC<PropsType> = (props) => {
    return (
        <StyledTextWrapper>
            <StyledText>{props.text}</StyledText>

            <StyledTableElementInfo>
                <StyledAuthorPositionWrapper>
                    <StyledNameAuthor>{props.author}</StyledNameAuthor>

                    <StyledAuthorPosition color={props.colorSecondary}>{props.position}</StyledAuthorPosition>
                </StyledAuthorPositionWrapper>

                <StyledDateTimeWrapper>
                    <StyledDate>{props.date}</StyledDate>

                    <StyledTime color={props.colorSecondary}>{props.time}</StyledTime>

                </StyledDateTimeWrapper>
            </StyledTableElementInfo>
        </StyledTextWrapper>
    );
}

export default TextElement;

// Style
const StyledTextWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`
const StyledText = styled.h4`
  font-size: 15px;
  line-height: 22px;
  color: ${props => props.color};

  @media (min-width: 768px) {
    min-width: 310px;
  }
`
// Info
const StyledTableElementInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`
// Author Position
const StyledAuthorPositionWrapper = styled.div`
  @media (max-width: 1919px) {
    width: 126px;
  }
  @media (min-width: 768px) {
    margin-left: 8px;
  }
  @media (min-width: 1920px) {
    width: 196px;
  }
`

const StyledNameAuthor = styled.span`
  display: block;
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  font-weight: 400;
`
type StyledAuthorType = {
    color: string
}
const StyledAuthorPosition = styled.small<StyledAuthorType>`
  display: block;

  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: ${props => props.color};
`
// Data Time
const StyledDateTimeWrapper = styled.div`
  @media (max-width: 1919px) {
    width: 126px;
  }

  @media (min-width: 768px) {
    margin-left: 8px;
  }

  @media (min-width: 1920px) {
    width: 196px;
  }
`
const StyledDate = styled.span`
  display: block;
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  font-weight: 400;
`
type StyledTimeType = {
    color: string
}
const StyledTime = styled.small<StyledTimeType>`
  display: block;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: ${props => props.color};
`