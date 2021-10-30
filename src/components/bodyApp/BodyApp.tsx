import React from 'react';
import styled from "styled-components";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import TitleBody from "./titleBody/TitleBody";
import TableFilter from "./table/TableFilter";
import TableElements from "./table/TableElements";
import Paginator from "./paginator/Paginator";

// Type (TS) FC
type PropsType = ReturnType<typeof mapStateToProps>

// FC
const BodyApp: React.FC<PropsType> = (props) => {
    return (
        <StyledBodyWrapper backgroundMain={props.backgroundMain}>
            <TitleBody title='Доброе утро, Ирина!' background={props.backgroundElements}/>
            <StyledBodyContainer colorTopLine={props.backgroundInput}>
                <TableFilter backgroundElements={props.backgroundElements}
                             backgroundInput={props.backgroundInput}
                             colorSecondary={props.colorSecondary}
                             colorDate={props.colorDate}
                             backgroundHoverElements={props.backgroundHoverElements}

                />
                <TableElements/>
                <Paginator colorSecondary={props.colorSecondary} colorActive={props.colorActive}
                           backgroundActive={props.backgroundActive} backgroundElements={props.backgroundElements}
                           backgroundInput={props.backgroundInput}/>
            </StyledBodyContainer>
        </StyledBodyWrapper>
    );
}

const mapStateToProps = (state: AppStateType) => ({
    backgroundMain: state.app.theme.bodyApp.backgroundMain,
    backgroundActive: state.app.theme.bodyApp.backgroundActive,
    backgroundElements: state.app.theme.bodyApp.backgroundElements,
    backgroundInput: state.app.theme.bodyApp.backgroundInput,
    colorSecondary: state.app.theme.bodyApp.colorSecondary,
    colorDate: state.app.theme.bodyApp.colorDate,
    backgroundHoverElements: state.app.theme.bodyApp.backgroundHoverElements,
    colorActive: state.app.theme.mainPanel.colorActiveElements
})

// Export (HOC)
export default connect(mapStateToProps, {})(BodyApp);

// Style
// Body
type StyledBodyWrapperType = {
    backgroundMain?: string
}

const StyledBodyWrapper = styled.div<StyledBodyWrapperType>`
  background-color: ${props => props.backgroundMain};

  @media (min-width: 768px) {
    flex-grow: 1;
  }

  @media (max-width: 767px) {
    position: relative;
    top: 56px;
  }
`

type StyledBodyContainerType = {
    colorTopLine: string
}
const StyledBodyContainer = styled.div<StyledBodyContainerType>`
  border-top: 1px solid ${props => props.colorTopLine};

  @media (max-width: 767px) {
    padding: 17px 16px 16px 16px
  }

  @media (min-width: 768px) {
    padding: 29px 30px 25px 30px
  }

  @media (min-width: 1920px) {
    padding: 29px 30px 30px 30px
  }
`