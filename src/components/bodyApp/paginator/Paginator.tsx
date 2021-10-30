import React, {ChangeEvent, SyntheticEvent, useState} from 'react';
import styled, {css} from "styled-components";
import Select from "../../styledComponents/Select";
import PageButton from "../../styledComponents/PageButton";

// Type (TS) FC
type PropsType = {
    colorSecondary?: string
    colorActive?: string
    backgroundActive?: string
    backgroundElements?: string
    backgroundInput?: string
}

// FC
const Paginator: React.FC<PropsType> = (props) => {
    return (
        <StyledPaginatorWrapper>
            <Select {...props} />

            <StyledPaginator>
                <StyledDoubledPrevButton colorSecondary={props.colorSecondary}
                                         backgroundActive={props.backgroundActive}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.70711 1.70711C8.09763 1.31658 8.09763 0.683417 7.70711 0.292893C7.31658 -0.0976311
                             6.68342 -0.0976311 6.29289 0.292893L0.292893 6.29289C-0.0976311 6.68342 -0.0976311 7.31658
                              0.292893 7.70711L6.29289 13.7071C6.68342 14.0976 7.31658 14.0976 7.70711 13.7071C8.09763
                              13.3166 8.09763 12.6834 7.70711 12.2929L2.41421 7L7.70711 1.70711Z"
                            fill=""/>
                        <path
                            d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311
                             12.6834 -0.0976311 12.2929 0.292893L6.29289 6.29289C5.90237 6.68342 5.90237 7.31658 6.29289
                              7.70711L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166
                               14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z"
                            fill=""/>
                    </svg>
                </StyledDoubledPrevButton>
                <StyledPrevButton colorSecondary={props.colorSecondary}
                                  backgroundActive={props.backgroundActive}>
                    <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.20711 0.292893C8.59763 0.683417 8.59763 1.31658 8.20711 1.70711L2.91421 7L8.20711
                            12.2929C8.59763 12.6834 8.59763 13.3166 8.20711 13.7071C7.81658 14.0976 7.18342 14.0976
                             6.79289 13.7071L0.792893 7.70711C0.402369 7.31658 0.402369 6.68342 0.792893 6.29289L6.79289
                              0.292893C7.18342 -0.0976311 7.81658 -0.0976311 8.20711 0.292893Z"
                            fill=""/>
                    </svg>
                </StyledPrevButton>
                {/* BreakPoint (больше ширины 360px) */}
                <StyledPagesButtonsWrapper>
                    <StyledFirstLastPageButton colorSecondary={props.colorSecondary}
                                               backgroundElements={props.backgroundElements}>
                        1</StyledFirstLastPageButton>
                    <StyledDotsWrapperLeft colorSecondary={props.colorSecondary}>...</StyledDotsWrapperLeft>
                    <PageButton {...props}>20</PageButton>
                    <PageButton {...props}>21</PageButton>
                    <PageButton {...props} isActive>22</PageButton>
                    <PageButton {...props}>23</PageButton>
                    <PageButton {...props}>24</PageButton>
                    <StyledDotsWrapperRight colorSecondary={props.colorSecondary}>...</StyledDotsWrapperRight>
                    <StyledFirstLastPageButton colorSecondary={props.colorSecondary}
                                               backgroundElements={props.backgroundElements}>
                        101</StyledFirstLastPageButton>
                </StyledPagesButtonsWrapper>

                {/* BreakPoint (ширина 360px и меньше) */}
                <StyledCurrentPageButtonWrapper>
                    <PageButton {...props} isActive>22</PageButton>
                </StyledCurrentPageButtonWrapper>
                <StyledNextButton colorSecondary={props.colorSecondary}
                                  backgroundActive={props.backgroundActive}>
                    <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.792893 0.292893C1.18342 -0.0976311 1.81658 -0.0976311 2.20711 0.292893L8.20711
                             6.29289C8.59763 6.68342 8.59763 7.31658 8.20711 7.70711L2.20711 13.7071C1.81658 14.0976
                              1.18342 14.0976 0.792893 13.7071C0.402369 13.3166 0.402369 12.6834 0.792893
                               12.2929L6.08579 7L0.792893 1.70711C0.402369 1.31658 0.402369 0.683417 0.792893 0.292893Z"
                            fill=""/>
                    </svg>
                </StyledNextButton>
                <StyledDoubledNextButton colorSecondary={props.colorSecondary}
                                         backgroundActive={props.backgroundActive}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311
                            0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834
                            -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7.70711
                             7.70711C8.09763 7.31658 8.09763 6.68342 7.70711 6.29289L1.70711 0.292893Z"
                            fill=""/>
                        <path
                            d="M7.70711 0.292893C7.31658 -0.0976311 6.68342 -0.0976311 6.29289 0.292893C5.90237
                             0.683417 5.90237 1.31658 6.29289 1.70711L11.5858 7L6.29289 12.2929C5.90237 12.6834 5.90237
                             13.3166 6.29289 13.7071C6.68342 14.0976 7.31658 14.0976 7.70711 13.7071L13.7071
                              7.70711C14.0976 7.31658 14.0976 6.68342 13.7071 6.29289L7.70711 0.292893Z"
                            fill=""/>
                    </svg>
                </StyledDoubledNextButton>
            </StyledPaginator>
        </StyledPaginatorWrapper>
    );
};

export default Paginator;

// Style
// Paginator
const StyledPaginatorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  height: 44px;
  @media (max-width: 1919px) {
    justify-content: center;
  }
  @media (min-width: 768px) {
    margin-top: 24px;
  }
`
const StyledPaginator = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 767px) {
    justify-content: space-between;
    padding: 0 15px;
    width: 100%;
  }
  @media (min-width: 768px) {
    justify-content: space-between;
    padding: 0 13px;
    width: 100%;
  }
  @media (min-width: 1920px) {
    justify-content: space-between;
    padding: 0 9px;
    width: 663px;
  }
  @media (max-width: 1919px) {
    max-width: 640px;
  }
`
// Prev button
const StyledDoubledPrevButton = styled.button<PropsType>`
  display: flex;
  align-items: center;
  justify-content: center;

  & path {
    fill: ${props => props.colorSecondary}
  }

  &:hover path {
    fill: ${props => props.backgroundActive}
  }
`
const StyledPrevButton = styled.button<PropsType>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;

  & path {
    fill: ${props => props.colorSecondary}
  }

  &:hover path {
    fill: ${props => props.backgroundActive}
  }

  @media (max-width: 360px) {
    margin-left: -21px;
  }
`
const StyledDotsWrapperLeft = styled.div<PropsType>`
  margin-left: 21px;
  margin-right: auto;
  color: ${props => props.colorSecondary}
`
const StyledDotsWrapperRight = styled.div<PropsType>`
  margin-right: 21px;
  margin-left: auto;
  color: ${props => props.colorSecondary}
`
// Pages Button
const StyledPagesButtonsWrapper = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 71%;
  }
`
const StyledCurrentPageButtonWrapper = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: block
  }
`
const StyledFirstLastPageButton = styled.button<PropsType>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 6px;
  border-width: 0;
  font-size: 15px;
  font-weight: 700;
  color: ${props => props.colorSecondary};

  &:hover {
    background-color: ${props => props.backgroundElements};
  }
`
// Next button
const StyledDoubledNextButton = styled.button<PropsType>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 6px;

  & path {
    fill: ${props => props.colorSecondary}
  }

  &:hover path {
    fill: ${props => props.backgroundActive}
  }

  @media (max-width: 360px) {
    margin-right: 0;
  }
`
const StyledNextButton = styled.button<PropsType>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;

  & path {
    fill: ${props => props.colorSecondary}
  }

  &:hover path {
    fill: ${props => props.backgroundActive}
  }

  @media (max-width: 360px) {
    margin-right: -21px;
  }
`