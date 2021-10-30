import React, {ChangeEvent, useState} from 'react';
import styled, {css} from "styled-components";


// Type (TS) FC
type PropsType = {
    backgroundData?: string
    colorDate?: string
    colorSecondary?: string
}

// FC
const DateInput: React.FC<PropsType> = (props) => {
    // Local State (filter Date)
    let [date, setDate] = useState('2021-08-11')

    const changeHandlerDate = (e: ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value);
    };

    const formatDate = (selectDate: string) => {
        const selectDateArray = selectDate.split('-');

        let month = '';

        switch (selectDateArray[1]) {
            case '01':
                month = 'янв';
                break;
            case '02':
                month = 'фев';
                break;
            case '03':
                month = 'мар';
                break;
            case '04':
                month = 'апр';
                break;
            case '05':
                month = 'май';
                break;
            case '06':
                month = 'июн';
                break;
            case '07':
                month = 'июл';
                break;
            case '08':
                month = 'авг';
                break;
            case '09':
                month = 'сен';
                break;
            case '10':
                month = 'окт';
                break;
            case '11':
                month = 'ноя';
                break;
            case '12':
                month = 'дек';
                break;
        };

        return `${selectDateArray[2]} ${month} ${selectDateArray[0]}`
    }

    return (
        <StyledInputDataWrapper backgroundData={props.backgroundData}>
            <StyledDataWrapper>
                <StyledDataInfoWrapper>
                    <StyledDataInfoTitle colorSecondary={props.colorSecondary}>Дата</StyledDataInfoTitle>

                    <StyledDataInfo colorDate={props.colorDate}>{formatDate(date) == undefined ? '11 авг 2021' : formatDate(date)}</StyledDataInfo>
                </StyledDataInfoWrapper>

                <StyledDataIcon>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.5 0C8.05228 0 8.5 0.447715 8.5 1V2H13.5V1C13.5 0.447715 13.9477 0 14.5 0C15.0523 0 15.5 0.447715 15.5 1V2H20C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H2C0.89543 22 0 21.1046 0 20V4C0 2.89543 0.89543 2 2 2H6.5V1C6.5 0.447715 6.94772 0 7.5 0ZM6.5 4H2V8H20V4H15.5V5C15.5 5.55228 15.0523 6 14.5 6C13.9477 6 13.5 5.55228 13.5 5V4H8.5V5C8.5 5.55228 8.05228 6 7.5 6C6.94772 6 6.5 5.55228 6.5 5V4ZM20 10H15.5V14H20V10ZM20 16H15.5V20H20V16ZM13.5 20V16H8.5V20H13.5ZM6.5 20V16H2V20H6.5ZM2 14H6.5V10H2V14ZM8.5 10V14H13.5V10H8.5Z"
                            fill={props.colorSecondary}/>
                    </svg>
                </StyledDataIcon>
            </StyledDataWrapper>

            <StyledInputData type='date' onChange={(e) => changeHandlerDate(e)}/>
        </StyledInputDataWrapper>
    );
}


export default DateInput;

// Style
type StyledInputDataWrapperType = {
    backgroundData?: string
    colorDate?: string
}
const StyledInputDataWrapper = styled.div<StyledInputDataWrapperType>`
  position: relative;

  width: 100%;
  height: 100%;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 6px;
  background-color: ${props => props.backgroundData};
`

const StyledInputData = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  opacity: 0;

  height: 100%;
  width: 100%;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 6px;
  border-width: 0;
`

const StyledDataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`

const StyledDataInfoWrapper = styled.div`

`

const StyledDataInfoTitle = styled.div<PropsType>`
  font-size: 12px;
  font-weight: 500;
  color: ${props => props.colorSecondary};
`

const StyledDataInfo = styled.div<PropsType>`
  color: ${props => props.colorDate};
`

const StyledDataIcon = styled.div`
  transform: translateY(2px);
`









