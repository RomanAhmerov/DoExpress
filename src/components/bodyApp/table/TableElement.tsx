import React from 'react';
import styled, {css} from "styled-components";
import CheckBox from "../../styledComponents/CheckBox";
import TextElement from "../../styledComponents/TextElement";


// Type (TS) FC
type PropsType = {
    id: number
    author: string
    position: string
    date: string
    time: string
    text: string
    isCheck: boolean
    backgroundElements: string
    backgroundHoverElements: string
    backgroundCheckbox: string
    backgroundCheckboxActive: string
    colorSecondary: string

    toggleElement: (elementId: number) => void
}

// FC
const TableElement = React.memo(function TableElement(props: PropsType) {
    return (
        <StyledTableElementWrapper>
            <StyledTableElement onClick={() => props.toggleElement(props.id)}
                                backgroundElements={props.backgroundElements}
                                backgroundHoverElements={props.backgroundHoverElements}>

                <CheckBox backgroundCheckbox={props.backgroundCheckbox}
                                       backgroundCheckboxActive={props.backgroundCheckboxActive} isCheck={props.isCheck}
                                       backgroundElements={props.backgroundElements} id={props.id}/>
                <TextElement text={props.text} author={props.author} date={props.date} time={props.time}
                             position={props.position} colorSecondary={props.colorSecondary} />
            </StyledTableElement>
        </StyledTableElementWrapper>
    );
});

export default TableElement;

// Style
// Li
const StyledTableElementWrapper = styled.li`
  margin-bottom: 8px;
`
type StyledTableElementType = {
    backgroundHoverElements: string
    backgroundElements: string
}
const StyledTableElement = styled.label<StyledTableElementType>`
  position: relative;

  display: flex;
  border-radius: 8px;
  background-color: ${props => props.backgroundElements};

  &:hover {
    background-color: ${props => props.backgroundHoverElements};
  }
  cursor: pointer;
  @media (max-width: 767px) {
    padding: 16px;
  }
  @media (min-width: 768px) {
    padding: 12px 0 12px 20px;
  }
  @media (min-width: 1920px) {
    padding: 12px 0 12px 20px;
  }
`



