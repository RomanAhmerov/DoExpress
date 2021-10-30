import {InferActionsTypes} from "../redux-store";


let initialState = {
    user: {
        name: 'Иванова И.И.',
        position: 'Администратор'
    },

    theme: {
        currentTheme: 'day',

        global: {
            color: '#000000',
        },

        mainPanel: {
            backgroundMain: '#30041E',
            backgroundActive: '#BD0071',
            backgroundHover: 'rgba(255, 255, 255, 0.12)',
            backgroundElements: 'rgba(255, 255, 255, 0.06)',

            colorActiveElements: '#FFFFFF',
            colorElements: '#9B868F'
        },

        bodyApp: {
            backgroundMain: '#F5F5F5',
            backgroundElements: '#FFFFFF',
            backgroundHoverElements: 'rgba(189, 0, 113, 0.04)',
            backgroundInput: 'rgba(0, 0, 0, 0.06)',
            backgroundActive: '#BD0071',

            colorSecondary: '#757575',
            colorDate: '#30041E'
        }
    }
};

// let initialState = {
// user: {
//     name: 'Иванова И.И.',
//     position: 'Администратор'
// },
//
// theme: {
//     currentTheme: 'night',
//
//     global: {
//         color: '#ffffff'
//     },
//
//     mainPanel: {
//         backgroundMain: '#1e1e1e',
//         backgroundActive: '#299103',
//         backgroundHover: 'rgba(91,115,81,0.2)',
//         backgroundElements: 'rgba(99,155,52,0.06)',
//
//         colorActiveElements: '#ffffff',
//         colorElements: '#879b86'
//     },
//
//     bodyApp: {
//         backgroundMain: '#313131',
//         backgroundElements: '#484945',
//         backgroundHoverElements: 'rgba(110,182,57,0.21)',
//         backgroundInput: 'rgba(99,119,99,0.41)',
//         backgroundActive: '#299103',
//
//         colorSecondary: '#c9e5ba',
//         colorDate: '#dbe0d5'
//     }
// }
// };

// Type (TS)
type InitialStateType = typeof initialState


// Reducer
const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "PA/APP/CHANGE-THEME":
            let newTheme: any = {}

            if (action.themeMode == 'day') {

                newTheme = {
                    currentTheme: 'night',

                    global: {
                        color: '#ffffff',
                    },

                    mainPanel: {
                        backgroundMain: '#1e1e1e',
                        backgroundActive: '#299103',
                        backgroundHover: 'rgba(91,115,81,0.2)',
                        backgroundElements: 'rgba(99,155,52,0.06)',

                        colorActiveElements: '#ffffff',
                        colorElements: '#879b86'
                    },

                    bodyApp: {
                        backgroundMain: '#313131',
                        backgroundElements: '#484945',
                        backgroundHoverElements: 'rgba(110,182,57,0.21)',
                        backgroundInput: 'rgba(99,119,99,0.41)',
                        backgroundActive: '#299103',

                        colorSecondary: '#c9e5ba',
                        colorDate: '#dbe0d5'
                    }

                }
            } else {
                newTheme = {
                    currentTheme: 'day',

                    global: {
                        color: '#000000',
                    },

                    mainPanel: {
                        backgroundMain: '#30041E',
                        backgroundActive: '#BD0071',
                        backgroundHover: 'rgba(255, 255, 255, 0.12)',
                        backgroundElements: 'rgba(255, 255, 255, 0.06)',

                        colorActiveElements: '#FFFFFF',
                        colorElements: '#9B868F'
                    },

                    bodyApp: {
                        backgroundMain: '#F5F5F5',
                        backgroundElements: '#FFFFFF',
                        backgroundHoverElements: 'rgba(189, 0, 113, 0.04)',
                        backgroundInput: 'rgba(0, 0, 0, 0.06)',
                        backgroundActive: '#BD0071',

                        colorSecondary: '#757575',
                        colorDate: '#30041E'
                    }
                }
            }

            return {
                ...state,
                theme: newTheme
            };

        default:
            return state;
    }
};


// Action Creator (AC)
export const actionsApp = {
    changeTheme: (themeMode: string) => ({type: "PA/APP/CHANGE-THEME", themeMode} as const),
}

// Type (TS) actions
type ActionsType = InferActionsTypes<typeof actionsApp>


export default appReducer;