import React from 'react';
import styled, {createGlobalStyle} from "styled-components";
import {connect} from "react-redux";
import {AppStateType} from "./redux/redux-store";
import BodyApp from "./components/bodyApp/BodyApp";
import MainPanel from "./components/mainPanel/MainPanel";
import {actionsApp} from "./redux/reducers/appReducer";

// Style
const Global = createGlobalStyle<PropsType>`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
    font-size: 15px;
    font-weight: 600;
    color: ${props => props.color};
    box-sizing: border-box;

    li {
      list-style-type: none;
    }
  ;

    button {
      border-width: 0;
      background-color: transparent;
    }
  ;
  }
`

// Type (TS) FC
type MapDispatchType = {
    changeTheme: (themeMode: string) => void
}
type PropsType = ReturnType<typeof mapStateToProps> & MapDispatchType

// FC
const App: React.FC<PropsType> = (props) => {
    return <>
        <Global {...props} />
        <StyledAppWrapper>
            <MainPanel {...props} />
            <BodyApp/>
        </StyledAppWrapper>
    </>;
}

const mapStateToProps = (state: AppStateType) => ({
    name: state.app.user.name,
    position: state.app.user.position,
    // Style
    // Global
    color: state.app.theme.global.color,
    // MainPanel
    backgroundMain: state.app.theme.mainPanel.backgroundMain,
    backgroundHover: state.app.theme.mainPanel.backgroundHover,
    backgroundActive: state.app.theme.mainPanel.backgroundActive,
    backgroundElements: state.app.theme.mainPanel.backgroundElements,
    colorActiveElements: state.app.theme.mainPanel.colorActiveElements,
    colorElements: state.app.theme.mainPanel.colorElements,
    themeMode: state.app.theme.currentTheme
});

export default connect(mapStateToProps, {changeTheme: actionsApp.changeTheme})(App);

// Style
const StyledAppWrapper = styled.div`
  min-height: 100vh;

  @media (min-width: 768px) {
    display: flex;
  }
`
