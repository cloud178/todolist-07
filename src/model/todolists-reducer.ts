import {v1} from "uuid";
import {FilterValues, Todolist} from "../App";

const todolistID1 = v1()
const todolistID2 = v1()

const initialState: Todolist[] = [
    {id: todolistID1, title: 'What to learn', filter: 'all'},
    {id: todolistID2, title: 'What to buy', filter: 'all'},
]

export type RemoveTodolistActionType = {
    type: 'REMOVE-TODOLIST',
    payload: {
        id: string,
    }
}

export type AddTodolistActionType = {
    type: 'ADD-TODOLIST',
    payload: {
        title: string,
    }
}

export type ChangeTodolistTitleActionType = {
    type: 'CHANGE-TODOLIST-TITLE',
    payload: {
        id: string,
        title: string,
    }
}

export type ChangeTodolistFilterActionType = {
    type: 'CHANGE-TODOLIST-FILTER',
    payload: {
        id: string,
        filter: FilterValues,
    }
}

type ActionsType =
    | RemoveTodolistActionType
    | AddTodolistActionType
    | ChangeTodolistTitleActionType
    | ChangeTodolistFilterActionType

export const todolistsReducer = (state = initialState, action: ActionsType): Todolist[] => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            const todolistId = action.payload.id
            return state.filter(todolist => todolist.id !== todolistId)
        }
        case 'ADD-TODOLIST': {
            return [
                ...state,
                {id: v1(), title: action.payload.title, filter: 'all'}
            ]
        }
        case 'CHANGE-TODOLIST-TITLE': {
            const todolistId = action.payload.id
            return state.map(el => el.id === todolistId ? {...el, title: action.payload.title} : el)
        }
        case 'CHANGE-TODOLIST-FILTER': {
            const todolistId = action.payload.id
            return state.map(el => el.id === todolistId ? {...el, filter: 'completed'} : el)
        }
        default:
            // throw new Error("I don't understand this type")
            return state
    }
}

export const removeTodolistAC = (id: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {
            id,
        },
    } as const
}

export const addTodolistAC = (title: string) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {
            title,
        },
    } as const
}

export const changeTodolistTitleAC = (id: string, title: string) => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        payload: {
            id,
            title,
        },
    } as const
}

export const changeTodolistFilterAC = (id: string, filter: FilterValues) => {
    return {
        type: 'CHANGE-TODOLIST-FILTER',
        payload: {
            id,
            filter,
        },
    } as const
}
