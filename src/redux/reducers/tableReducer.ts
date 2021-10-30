import {InferActionsTypes} from "../redux-store";


let initialState = {
    tableElements: [
        {
            id: 1,
            author: 'Иванова И.И.',
            position: 'Администратор',
            date: '11 августа 2021',
            time: '17:34:44',
            text: 'Площадь нефтяного пятна в районе Новороссийска достигла 80 кв. км., выяснили ученые Института космических исследований (ИКИ) РАН.',
            isCheck: true,
        },

        {
            id: 2,
            author: 'Иванова И.И.',
            position: 'Администратор',
            date: '11 августа 2021',
            time: '17:34:44',
            text: 'Площадь нефтяного пятна в районе Новороссийска достигла 80 кв. км., выяснили ученые Института космических исследований (ИКИ) РАН.',
            isCheck: true,
        },

        {
            id: 3,
            author: 'Иванова И.И.',
            position: 'Администратор',
            date: '11 августа 2021',
            time: '17:34:44',
            text: 'Площадь нефтяного пятна в районе Новороссийска достигла 80 кв. км., выяснили ученые Института космических исследований (ИКИ) РАН.',
            isCheck: false,
        },

        {
            id: 4,
            author: 'Иванова И.И.',
            position: 'Администратор',
            date: '11 августа 2021',
            time: '17:34:44',
            text: 'Площадь нефтяного пятна в районе Новороссийска достигла 80 кв. км., выяснили ученые Института космических исследований (ИКИ) РАН.',
            isCheck: false,
        },

        {
            id: 5,
            author: 'Иванова И.И.',
            position: 'Администратор',
            date: '11 августа 2021',
            time: '17:34:44',
            text: 'Площадь нефтяного пятна в районе Новороссийска достигла 80 кв. км., выяснили ученые Института космических исследований (ИКИ) РАН.',
            isCheck: false,
        },

        {
            id: 6,
            author: 'Иванова И.И.',
            position: 'Администратор',
            date: '11 августа 2021',
            time: '17:34:44',
            text: 'Площадь нефтяного пятна в районе Новороссийска достигла 80 кв. км., выяснили ученые Института космических исследований (ИКИ) РАН.',
            isCheck: false,
        },

        {
            id: 7,
            author: 'Иванова И.И.',
            position: 'Администратор',
            date: '11 августа 2021',
            time: '17:34:44',
            text: 'Площадь нефтяного пятна в районе Новороссийска достигла 80 кв. км., выяснили ученые Института космических исследований (ИКИ) РАН.',
            isCheck: false,
        },

        {
            id: 8,
            author: 'Иванова И.И.',
            position: 'Администратор',
            date: '11 августа 2021',
            time: '17:34:44',
            text: 'Площадь нефтяного пятна в районе Новороссийска достигла 80 кв. км., выяснили ученые Института космических исследований (ИКИ) РАН.',
            isCheck: false,
        },

        {
            id: 9,
            author: 'Иванова И.И.',
            position: 'Администратор',
            date: '11 августа 2021',
            time: '17:34:44',
            text: 'Площадь нефтяного пятна в районе Новороссийска достигла 80 кв. км., выяснили ученые Института космических исследований (ИКИ) РАН.',
            isCheck: false,
        },
    ]
};

// Type (TS)
type InitialStateType = typeof initialState


// Reducer
const tableReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'PA/TABLE/TOGGLE_ELEMENT':
            let newState = JSON.parse(JSON.stringify(state));

            if (newState.tableElements[action.elementId - 1].isCheck) {
                newState.tableElements[action.elementId - 1].isCheck = false;
            } else {
                newState.tableElements[action.elementId - 1].isCheck = true;
            }

            return newState;

        default:
            return state;
    }
};




// Action Creator (AC)
export const actionsTable = {
    toggleElement: (elementId: number) => ({type: "PA/TABLE/TOGGLE_ELEMENT", elementId} as const),
}

// Type (TS) actions
type ActionsType = InferActionsTypes<typeof actionsTable>



export default tableReducer;


