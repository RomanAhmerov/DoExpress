import React, {ChangeEvent, useState} from 'react';
import styled from "styled-components";
import DateInput from "../../styledComponents/DateInput";
import FilterButton from "../../styledComponents/filtersButtons/FilterButton";

// Type (TS) FC
type PropsType = {
    backgroundElements?: string
    backgroundInput?: string
    colorSecondary?: string
    colorDate?: string
    backgroundHoverElements?: string
}

// FC
const TableFilter: React.FC<PropsType> = (props) => {
    // Все Input-ы являются контролируемыми с помощью (Local State)
    // Local State (filter Name)
    let [nameElement, setNameElement] = useState('')

    const changeHandlerNamElement = (e: ChangeEvent<HTMLInputElement>) => {
        setNameElement(e.target.value);
    };

    // Local State (filter Author)
    let [nameAuthor, setNameAuthor] = useState('')

    const changeHandlerNameAuthor = (e: ChangeEvent<HTMLInputElement>) => {
        setNameAuthor(e.target.value);
    };

    return (
        <StyledTableFilterWrapper>
            <StyledUl>
                <StyledLi>
                    <StyledInputText
                        type='text'
                        placeholder='Название'
                        backgroundInput={props.backgroundInput}
                        backgroundHover={props.backgroundElements}
                        value={nameElement}
                        onChange={(e) => changeHandlerNamElement(e)}
                    />
                </StyledLi>
                <StyledLi>
                    <StyledInputText
                        type='text'
                        placeholder='Автор'
                        backgroundInput={props.backgroundInput}
                        backgroundHover={props.backgroundElements}
                        value={nameAuthor}
                        onChange={(e) => changeHandlerNameAuthor(e)}
                    />
                </StyledLi>
                <StyledLi>
                    <DateInput backgroundData={props.backgroundElements} colorDate={props.colorDate}
                               colorSecondary={props.colorSecondary}/>
                </StyledLi>
            </StyledUl>

            <StyledButtonsUl>
                <StyledButtonLi>
                    <StyledFilterButtonWrapper margin='0 0 0 20px'>
                        <FilterButton title='Название Штампа' backgroundInput={props.backgroundInput}
                                      colorSecondary={props.colorSecondary}/>
                    </StyledFilterButtonWrapper>
                </StyledButtonLi>
                <StyledButtonLi>
                    <StyledFilterButtonWrapper>
                        <FilterButton title='Автор' backgroundInput={props.backgroundInput}
                                      colorSecondary={props.colorSecondary}/>
                    </StyledFilterButtonWrapper>
                </StyledButtonLi>
                <StyledButtonLi>
                    <StyledFilterButtonWrapper>
                        <FilterButton title='Дата' backgroundInput={props.backgroundInput}
                                      colorSecondary={props.colorSecondary}/>
                    </StyledFilterButtonWrapper>
                </StyledButtonLi>
            </StyledButtonsUl>
        </StyledTableFilterWrapper>
    );
}

export default TableFilter;

// Style
// TableFilter
const StyledTableFilterWrapper = styled.div`
  @media (max-width: 767px) {
  }
`
// Li
const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 767px) {
    height: 112px;
    & li {
      width: 48.8%;
    }
    & :first-child {
      width: 100%;
    }
  }
  @media (min-width: 768px) {
    flex-wrap: nowrap;
    align-content: baseline;
    & li {
      flex-grow: 0;
      width: 32%;
    }
  }
  @media (min-width: 1920px) {
    flex-wrap: nowrap;
    align-content: baseline;
    & li {
      flex-grow: 0;
      width: 0;
      width: 12.03%;
    }
    & > :first-child {
      width: 74.9%;
    }
  }
`
const StyledLi = styled.li`
  display: block;
  cursor: pointer;
`
// InputText
type StyledInputTextType = {
    backgroundInput?: string
    backgroundHover?: string
}
const StyledInputText = styled.input<StyledInputTextType>`
  height: 52px;
  width: 100%;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 6px;
  border-width: 0;
  background-color: ${props => props.backgroundInput};
  &:hover {
    background-color: ${props => props.backgroundHover};
  }
`
// Filter buttons
const StyledButtonsUl = styled.ul`
  display: none;
  width: 100%;
  @media (min-width: 768px) {
    display: flex;
    margin-top: 29px;
    margin-bottom: 0px;
  }
`
const StyledButtonLi = styled.li`
  display: block;
  cursor: pointer;
  &:first-child {
    margin-right: auto;
  }
  &:nth-child(2) {
    margin-right: 80px;
  }
  &:last-child {
    margin-right: 80px;
  }
  @media (min-width: 1920px) {
    &:nth-child(2) {
      margin-right: 150px;
    }
    &:last-child {
      margin-right: 150px;
    }
  }
`
type StyledFilterButtonWrapperType = {
    margin?: string
}
const StyledFilterButtonWrapper = styled.div<StyledFilterButtonWrapperType>`
  display: block;
  margin: ${props => props.margin};
`



