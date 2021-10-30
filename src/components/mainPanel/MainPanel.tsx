import React, {useCallback, useState} from 'react';
import styled, {css} from "styled-components";
import Logo from "../styledComponents/Logo";
import userPhoto from '../../assets/img/userPhoto.png';
import Burger from "../styledComponents/Burger";
import RollUpButton from "../styledComponents/asideItems/RollUpButton";
import ThemeButtonNavItem from "../styledComponents/asideItems/navItems/ThemeButtonNavItem";
import NavItem from "../styledComponents/asideItems/navItems/NavItem";

// Type (TS) FC
type PropsType = {
    name: string
    position: string
    // Styled
    backgroundMain: string
    backgroundHover: string
    backgroundActive: string
    backgroundElements: string
    colorActiveElements: string
    colorElements: string
    themeMode: string
    changeTheme: (themeMode: string) => void
}

// FC
const MainPanel: React.FC<PropsType> = (props) => {
    // Local State (используется для переключение side bar-а)
    let [fullMode, setFullMode] = useState(true);

    const onChangeFullMode = useCallback((mode: boolean) => {
        if (mode) {
            setFullMode(false);
        } else {
            setFullMode(true);
        }
    }, [fullMode]);

    return (
        <StyledMainPanelWrapper backgroundMain={props.backgroundMain} fullMode={fullMode}>
            <StyledHeader backgroundElements={props.backgroundElements}>
                <StyledLogoWrapper>
                    <Logo backgroundLogo={props.backgroundActive}/>
                </StyledLogoWrapper>
                <StyledNameCompany fullMode={fullMode} color={props.colorActiveElements}>DoExpress</StyledNameCompany>
            </StyledHeader>
            <StyledAsideWrapper>
                <StyledUserWrapper colorBorder={props.colorElements}>
                    <StyledUserPhoto colorBorder={props.colorElements}/>
                    <StyledUserInfoWrapper fullMode={fullMode}>
                        <StyledUserPosition color={props.colorElements}>{props.position}</StyledUserPosition>
                        <StyledUserName color={props.colorActiveElements}>{props.name}</StyledUserName>
                    </StyledUserInfoWrapper>
                </StyledUserWrapper>
                <StyledBurgerWrapper>
                    <Burger colorBurger={props.colorElements} fullMode={fullMode} currentMode={fullMode}
                            onChangeFullMode={onChangeFullMode}/>
                </StyledBurgerWrapper>
                <StyledNavWrapper background={props.backgroundMain} fullMode={fullMode}>
                    <StyledNavItemsWrapper colorLine={props.backgroundHover}>
                        <StyledNavItemWrapper>
                            <NavItem backgroundActive={props.backgroundActive} isActive={false}
                                     backgroundHover={props.backgroundHover} itemColor={props.colorElements}
                                     itemActiveColor={props.colorActiveElements}
                                     fullMode={fullMode} itemText='Театры'>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0 2C0 0.89543 0.89543 0 2 0H18C19.1046 0 20 0.89544 20 2V16C20 16.4347
                                         19.7192 16.8196 19.3053 16.9523C18.8913 17.085 18.4391 16.9351 18.1864
                                          16.5814L13.6983 10.3005C12.492 10.8852 11.257 11.1912 10 11.1912C8.74302
                                           11.1912 7.50798 10.8852 6.30165 10.3005L1.81363 16.5814C1.56091 16.9351
                                            1.10867 17.085 0.694737 16.9523C0.280805 16.8196 0 16.4347 0 16V2ZM18
                                             2H2V12.8805L5.18637 8.42127C5.4885 7.99844 6.06414 7.87751 6.51088
                                              8.143C7.71523 8.85873 8.87405 9.19125 10 9.19125C11.1259 9.19125
                                               12.2848 8.85873 13.4891 8.143C13.9359 7.87751 14.5115 7.99844
                                               14.8136 8.42127L18 12.8805V2ZM0 19C0 18.4477 0.447715 18 1 18H19C19.5523
                                                18 20 18.4477 20 19C20 19.5523 19.5523 20 19 20H1C0.447715 20 0 19.5523
                                                 0 19Z" fill=""/>
                                </svg>
                            </NavItem>
                        </StyledNavItemWrapper>
                        <StyledNavItemWrapper>
                            <NavItem backgroundActive={props.backgroundActive} isActive={true}
                                     backgroundHover={props.backgroundHover} itemColor={props.colorElements}
                                     itemActiveColor={props.colorActiveElements}
                                     fullMode={fullMode} itemText='Штампы'>
                                <svg width="18" height="21" viewBox="0 0 18 21" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6.64708 3.22825C6.0238 3.69929 5.51095 4.49666 5.51095 5.9264C5.51095
                                         7.35347 6.00675 8.19786 6.51246 8.82028C6.64556 8.98408 6.78181 9.13519
                                          6.9213 9.28638C6.94817 9.31551 6.97599 9.34552 7.00437 9.37612C7.11479
                                           9.49521 7.23359 9.62333 7.33693 9.74346C7.56073 10.0036 7.96175 10.4906
                                            7.96175 11.1396C7.96175 11.1715 7.9618 11.2039 7.96185 11.2368C7.96248
                                            11.6337 7.96321 12.0935 7.87446 12.4421C7.81864 12.6613 7.69845 12.971
                                             7.40762 13.2121C7.10604 13.4621 6.76393 13.5213 6.50345
                                              13.5213H2.00189L2.00046 16H16V13.5213H11.5164C11.4062 13.5213
                                               11.0942 13.5214 10.7914 13.345C10.4177 13.1272 10.2711 12.7826
                                                10.2107 12.5482C10.1564 12.3377 10.1431 12.1074 10.1369 11.9147C10.1302
                                                11.7103 10.1302 11.4544 10.1302 11.1558V11.1396C10.1302 10.4763 10.4632
                                                 9.98175 10.7365 9.64696C10.8734 9.47922 11.0277 9.31401 11.1639
                                                  9.16817L11.1708 9.16077C11.3159 9.00537 11.4519 8.85969 11.5861
                                                   8.70119C12.0829 8.11465 12.5682 7.34445 12.5682 5.9264C12.5682
                                                    4.46038 12.0886 3.6633 11.5259 3.20753C10.9256 2.72129 10.0771
                                                     2.5 9.1599 2.5C8.24043 2.5 7.31623 2.72255 6.64708
                                                     3.22825ZM5.44123 1.63266C6.56904 0.780329 7.96932 0.5 9.1599
                                                      0.5C10.3528 0.5 11.7084 0.781588 12.7847 1.65339C13.8987
                                                       2.55565 14.5682 3.97177 14.5682 5.9264C14.5682 7.929 13.8345
                                                        9.14105 13.1123 9.99377C12.9461 10.1901 12.7815 10.3663
                                                         12.6431 10.5145L12.6325 10.5258C12.4847 10.6841 12.3752
                                                          10.8021 12.2859 10.9116C12.1668 11.0575 12.1367
                                                          11.1264 12.1302 11.1462C12.1302 11.2894 12.1303 11.4132
                                                           12.1308 11.5213H16.5C17.3284 11.5213 18 12.1929 18
                                                            13.0213V17C18 17.5523 17.5523 18 17 18H0.999878C0.734561
                                                             18 0.480119 17.8946 0.292566 17.7069C0.105013 17.5192
                                                              -0.000275623 17.2647 -0.000121902 16.9994L0.00218402
                                                              13.0197C0.00353282 12.1924 0.67414 11.5222 1.50139
                                                               11.5213L1.50247 11.5213L5.9605 11.5213C5.96148 11.4352
                                                               5.96169 11.3388 5.96174 11.229C5.94074 11.1972 5.8989
                                                                11.1386 5.82069 11.0477C5.74401 10.9585 5.65915 10.867
                                                                 5.55335 10.7528C5.52136 10.7183 5.48747 10.6817 5.4513
                                                                  10.6425C5.30358 10.4824 5.13349 10.2947 4.96023
                                                                   10.0815C4.24055 9.19569 3.51095 7.91998 3.51095
                                                                    5.9264C3.51095 3.93549 4.26754 2.51966 5.44123
                                                                    1.63266ZM-2.15649e-06 20C-2.15649e-06 19.4477
                                                                     0.447713 19 0.999998 19H17C17.5523 19 18
                                                                      19.4477 18 20C18 20.5523 17.5523 21 17
                                                                      21H0.999998C0.447713 21 -2.15649e-06 20.5523
                                                                      -2.15649e-06 20Z" fill=""/>
                                </svg>
                            </NavItem>
                        </StyledNavItemWrapper>
                        <StyledNavItemWrapper>
                            <NavItem backgroundActive={props.backgroundActive} isActive={false}
                                     backgroundHover={props.backgroundHover} itemColor={props.colorElements}
                                     itemActiveColor={props.colorActiveElements}
                                     fullMode={fullMode} itemText='Зонты'>
                                <svg width="20" height="22" viewBox="0 0 20 22" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10 0C10.5128 0 10.9355 0.38604 10.9933 0.883379L11 1L11.001 1.04934C11.013 1.05053 11.025 1.05174 11.0369 1.05297C11.082 1.0577 11.127 1.06263 11.1719 1.06787C11.2658 1.07869 11.3595 1.09094 11.4527 1.10446C11.4685 1.1069 11.4848 1.10931 11.5011 1.11176C11.6111 1.12814 11.7198 1.14632 11.828 1.16624C11.8332 1.16738 11.8392 1.16849 11.8452 1.16961C12.0663 1.21058 12.2842 1.25881 12.4993 1.314C12.541 1.32493 12.5824 1.33583 12.6236 1.34699C12.71 1.37011 12.7961 1.39465 12.8817 1.4203C12.891 1.42333 12.9003 1.42613 12.9096 1.42895C13.1301 1.49546 13.3473 1.56959 13.5609 1.65081C13.584 1.65985 13.6073 1.66882 13.6306 1.67788C13.72 1.71235 13.8084 1.74819 13.8962 1.78525C13.9105 1.79161 13.9255 1.79796 13.9404 1.80435C14.0391 1.8463 14.1364 1.88982 14.2329 1.93483C14.2636 1.94949 14.2947 1.96419 14.3257 1.97906C14.4057 2.01705 14.4849 2.05633 14.5636 2.09662C14.5732 2.1019 14.5825 2.10667 14.5918 2.11145C17.8064 3.77321 20 7.11694 20 10.9722V12C20 13.3333 18 13.3333 18 12L17.9935 11.8655C17.9252 11.1511 17.3273 10.5 16.75 10.5C16.1832 10.5 15.5967 11.1275 15.5108 11.8263L15.5037 12.0004L15.496 12.077L15.493 12.1332C15.4379 12.6468 15.064 12.9322 14.6546 12.9893L14.5517 12.9988C14.5464 12.9991 14.541 12.9993 14.5356 12.9994C14.515 13.0002 14.4943 13.0003 14.4735 12.9997L14.4483 12.9988L14.3912 12.9947C13.9275 12.9479 13.5 12.6164 13.5 12L13.503 12.077L13.4935 11.8655C13.4295 11.1958 12.9 10.5816 12.3584 10.5075L12.25 10.5C11.6366 10.5 11 11.235 11 12V18.75C11 20.545 9.54495 22 7.75 22C6.01695 22 4.60075 20.6436 4.50514 18.9344L4.5 18.75V18.0909C4.5 17.5386 4.94772 17.0909 5.5 17.0909C6.01284 17.0909 6.43551 17.4769 6.49327 17.9743L6.5 18.0909V18.75C6.5 19.4404 7.05961 20 7.75 20C8.39724 20 8.92954 19.5082 8.99355 18.8778L9 18.75V12L8.99353 11.8655C8.92519 11.1511 8.32732 10.5 7.75 10.5C7.1366 10.5 6.5 11.2351 6.5 12L6.49928 12.0478C6.49864 12.0612 6.49774 12.0744 6.49657 12.0877L6.5 12C6.5 12.5977 6.0981 12.9275 5.65462 12.9893L5.5517 12.9988C5.5497 12.9989 5.54769 12.999 5.54568 12.9991C5.52273 13.0002 5.5004 13.0005 5.47818 13L5.4483 12.9988L5.43745 12.9983C5.4325 12.998 5.42756 12.9976 5.42262 12.9973L5.40321 12.9958C5.00615 12.9615 4.62963 12.7151 4.52723 12.2568L4.51142 12.1693L4.48574 12.0574L4.42959 11.7705C4.41999 11.7162 4.41035 11.6587 4.40079 11.5981L4.37383 11.401C4.15802 10.8918 3.69783 10.5 3.25 10.5C2.63661 10.5 2 11.2351 2 12L1.99303 12.1332C1.86445 13.3317 0 13.2874 0 12V10.9722C0 7.11975 2.19043 3.77806 5.39656 2.11718C5.40025 2.11544 5.40408 2.11343 5.40794 2.11144L5.46745 2.08081C5.53361 2.04721 5.6002 2.01431 5.6672 1.98214L5.40794 2.11144C5.52662 2.05016 5.64643 1.99132 5.76729 1.93493C5.86361 1.88982 5.96093 1.8463 6.05905 1.8043C6.0743 1.79795 6.08924 1.7916 6.1042 1.78528C6.19161 1.7482 6.28001 1.71235 6.36902 1.67775C6.39411 1.66817 6.4191 1.65857 6.44413 1.64907C6.52059 1.61988 6.59754 1.59176 6.67492 1.56456C6.71041 1.55226 6.74612 1.53993 6.78191 1.52781C6.88373 1.49314 6.98619 1.46028 7.08934 1.42903C7.09884 1.42632 7.10849 1.42341 7.11814 1.42052C7.20251 1.39507 7.28719 1.37092 7.37233 1.34786C7.41813 1.33562 7.46419 1.3235 7.51035 1.3117C7.72203 1.25744 7.93682 1.21 8.15408 1.16956C8.16061 1.16849 8.16661 1.16738 8.1726 1.16627C8.28016 1.14632 8.38889 1.12814 8.4982 1.11172C8.51536 1.10926 8.53203 1.10679 8.54872 1.10437C8.63559 1.09166 8.72321 1.08013 8.81119 1.06974C8.83745 1.06672 8.86321 1.06378 8.88899 1.06094L9.00001 1.04924L9 1C9 0.447715 9.44771 0 10 0ZM13.0768 3.61092L12.9589 3.44888C13.5448 4.23519 14.045 5.13113 14.4334 6.14097C14.8148 7.13242 15.0816 8.06329 15.2558 8.91795C15.6528 8.68259 16.0996 8.53529 16.5724 8.50557L16.75 8.5C17.0478 8.5 17.3367 8.54692 17.6112 8.63351L17.653 8.648L17.636 8.58764C16.9924 6.53887 15.5413 4.8456 13.654 3.87827L13.3886 3.74835C13.3452 3.72813 13.3017 3.70828 13.2579 3.68882C13.2101 3.66733 13.162 3.64651 13.1138 3.62618L13.2579 3.68882C13.1979 3.66213 13.1376 3.63617 13.0768 3.61092ZM8.43601 4.66923C7.78854 5.37913 7.2659 6.13236 6.91058 6.91389C6.62164 7.54941 6.4406 8.2074 6.34781 8.86453L6.3972 8.83786C6.75869 8.64945 7.15544 8.53178 7.57242 8.50557L7.75 8.5L7.95695 8.50757C8.32452 8.53452 8.67603 8.63248 9.00111 8.78718L9.00021 4.09169C8.80809 4.27559 8.61928 4.46829 8.43601 4.66923ZM11.0006 4.19935L10.9998 8.78672C11.3333 8.62817 11.6946 8.52932 12.0724 8.50557L12.25 8.5C12.528 8.5 12.7981 8.54088 13.0561 8.61673L13.1338 8.64072C12.9901 8.06702 12.8023 7.47129 12.5668 6.859C12.2452 6.0229 11.8342 5.28675 11.3552 4.64393C11.2388 4.48784 11.1204 4.33969 11.0006 4.19935ZM6.56968 3.76735L6.52478 3.78914C6.47497 3.81313 6.42539 3.83764 6.37605 3.86267C4.47395 4.82784 3.01103 6.52813 2.36403 8.58765L2.346 8.648L2.38878 8.63352C2.60842 8.56424 2.83721 8.52036 3.07242 8.50557L3.25 8.5C3.63521 8.5 4.00536 8.5785 4.34905 8.71978C4.4578 7.84242 4.69493 6.95489 5.08992 6.08612C5.46205 5.26763 5.96494 4.49443 6.56968 3.76735Z"
                                        fill=""/>
                                </svg>
                            </NavItem>
                        </StyledNavItemWrapper>
                        <StyledNavItemWrapper>
                            <ThemeButtonNavItem backgroundActive={props.backgroundActive} isActive={false}
                                                backgroundHover={props.backgroundHover} itemColor={props.colorElements}
                                                itemActiveColor={props.colorActiveElements}
                                                fullMode={fullMode} changeTheme={props.changeTheme}
                                                themeMode={props.themeMode}
                            />
                        </StyledNavItemWrapper>
                    </StyledNavItemsWrapper>
                </StyledNavWrapper>
            </StyledAsideWrapper>
            <StyledRollUpWrapper fullMode={fullMode}>
                <RollUpButton onChangeFullMode={onChangeFullMode} currentMode={fullMode}
                              colorButton={props.colorElements} colorLine={props.backgroundHover}
                              fullMode={fullMode} itemActiveColor={props.colorActiveElements}
                />
            </StyledRollUpWrapper>
        </StyledMainPanelWrapper>
    );
}

export default MainPanel;

// Style
// Wrapper
type StyledMainPanelWrapperType = {
    backgroundMain?: string
    fullMode?: boolean
}
const StyledMainPanelWrapper = styled.div<StyledMainPanelWrapperType>`
  position: relative;

  background-color: ${props => props.backgroundMain};

  @media (min-width: 768px) {
    width: 240px;


    ${props => !props.fullMode && css`
      width: 72px;
    `}
  }

  @media (max-width: 767px) {
    position: fixed;

    display: flex;
    justify-content: space-between;

    width: 100%;
    z-index: 2;
  }
`
// Header
type StyledHeader = {
    backgroundElements?: string
}
const StyledHeader = styled.header<StyledHeader>`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  background-color: ${props => props.backgroundElements};

  @media (min-width: 768px) {
    height: 72px;
  }

  cursor: pointer;
`
const StyledLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  width: 56px;

  @media (min-width: 768px) {
    margin-left: 8px;
  }
`
type StyledNameCompanyType = {
    color?: string
    fullMode?: boolean
}
const StyledNameCompany = styled.h1<StyledNameCompanyType>`
  margin-left: 5px;
  margin-right: 12px;

  font-size: 20px;
  font-weight: 700;
  color: ${props => props.color};

  @media (max-width: 767px) {
    position: absolute;

    visibility: hidden;
  }

  ${props => !props.fullMode && css`
    position: absolute;

    visibility: hidden;
  `}
`
// Aside
const StyledAsideWrapper = styled.div`
  position: relative;

  padding-left: 12px;
  padding-right: 12px;

  color: ${props => props.color};

  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 0;
  }
`
// User
type StyledUserWrapperType = {
    colorBorder?: string
}
const StyledUserWrapper = styled.div<StyledUserWrapperType>`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 768px) {
    margin-top: 35px;
  }

  &:hover > :first-child {
    box-shadow: 0 0 5px 0 ${props => props.colorBorder};
  }

  cursor: pointer;
`
type StyledUserPhotoType = {
    colorBorder?: string
}
const StyledUserPhoto = styled.div<StyledUserPhotoType>`
  width: 44px;
  height: 44px;
  border-radius: 22px;

  box-shadow: 0 0 2px 0 ${props => props.colorBorder};

  background-image: url(${userPhoto});
  background-repeat: no-repeat;
  background-position: center center;

`
type StyledUserInfoWrapperType = {
    fullMode?: boolean
}
const StyledUserInfoWrapper = styled.div<StyledUserInfoWrapperType>`
  margin-left: 12px;

  @media (max-width: 767px) {
    position: absolute;
    visibility: hidden;

    ${props => !props.fullMode && css`
      position: absolute;
      top: 68px;
      right: 10px;

      visibility: visible;
      z-index: 1;
    `}
  }

  ${props => !props.fullMode && css`
    position: absolute;
    visibility: hidden;
  `}
`
type StyledUserPositionType = {
    color?: string
}
const StyledUserPosition = styled.small<StyledUserPositionType>`
  display: block;

  font-size: 12px;
  font-weight: 400;
  color: ${props => props.color};
`

type StyledStyledUserNameType = {
    color?: string
}
const StyledUserName = styled.span<StyledStyledUserNameType>`
  display: block;

  font-weight: 700;
  color: ${props => props.color};
`
// Burger
const StyledBurgerWrapper = styled.div`
  margin-right: 25px;
  margin-left: 25px;

  @media (min-width: 768px) {
    display: none;
  }
`
// Nav
type StyledNavWrapperType = {
    background?: string
    fullMode: boolean
}
const StyledNavWrapper = styled.nav<StyledNavWrapperType>`
  margin-top: 20px;

  @media (max-width: 767px) {
    position: absolute;
    top: 56px;
    right: 0;

    width: 320px;
    margin-top: 0;
    padding: 0 5px 5px 5px;
    border-radius: 0 0 0 10px;

    background-color: ${props => props.background};

    ${props => props.fullMode && css`
      position: absolute;
      visibility: hidden;
    `}
  }
`
type StyledNavItemsWrapperType = {
    colorLine?: string
}
const StyledNavItemsWrapper = styled.ul<StyledNavItemsWrapperType>`
  @media (max-width: 767px) {
    display: flex;

    padding-top: 5px;
    border-top: 1px solid ${props => props.colorLine};
  }
`
const StyledNavItemWrapper = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    margin-right: 5px;
  }

  @media (min-width: 768px) {
    &:last-child {
      margin-top: 20px;
    }
  }
`
// Roll Up
type StyledRollUpWrapperType = {
    fullMode?: boolean
}
const StyledRollUpWrapper = styled.div<StyledRollUpWrapperType>`
  position: absolute;
  bottom: 0;

  width: 240px;
  padding-left: 12px;
  padding-right: 12px;

  @media (max-width: 767px) {
    position: absolute;

    visibility: hidden;
  }

  ${props => !props.fullMode && css`
    width: 72px;
  `}
`







