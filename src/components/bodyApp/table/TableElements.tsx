import React from 'react';
import styled from "styled-components";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import TableElement from "./TableElement";
import {actionsTable} from "../../../redux/reducers/tableReducer";


// Type (TS) FC
type mapStateType = ReturnType<typeof mapStateToProps>
type mapDispatchType = {
    toggleElement: (idElement: number) => void
}

// FC
const TableElements: React.FC<mapStateType & mapDispatchType> = (props) => {
    return (
        <StyledTableElements>
            {
                props.tableElementsArray
                    .map(
                        (elData) => (
                            <TableElement
                                key={elData.id}
                                author={elData.author}
                                position={elData.position}
                                date={elData.date}
                                time={elData.time}
                                text={elData.text}
                                isCheck={elData.isCheck}
                                id={elData.id}
                                toggleElement={props.toggleElement}
                                backgroundElements={props.backgroundElements}
                                backgroundHoverElements={props.backgroundHoverElements}
                                backgroundCheckbox={props.backgroundCheckbox}
                                backgroundCheckboxActive={props.backgroundCheckboxActive}
                                colorSecondary={props.colorSecondary}
                            />
                        )
                    )
            }
        </StyledTableElements>
    );
}

const mapStateToProps = (state: AppStateType) => ({
    tableElementsArray: state.tableSection.tableElements,

    backgroundElements: state.app.theme.bodyApp.backgroundElements,
    backgroundHoverElements: state.app.theme.bodyApp.backgroundHoverElements,
    backgroundCheckbox: state.app.theme.bodyApp.backgroundInput,
    backgroundCheckboxActive: state.app.theme.bodyApp.backgroundActive,
    colorSecondary: state.app.theme.bodyApp.colorSecondary,
});

export default connect(mapStateToProps, {toggleElement: actionsTable.toggleElement})(TableElements);

// Style
const StyledTableElements = styled.ul`
  margin-top: 16px;
  @media (min-width: 768px) {
    margin-top: 13px;
  }
`