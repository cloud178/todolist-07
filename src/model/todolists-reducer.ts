import {v1} from "uuid";
import {Todolist} from "../App";

const todolistID1 = v1()
const todolistID2 = v1()

const initialState: Todolist[] = [
    {id: todolistID1, title: 'What to learn', filter: 'all'},
    {id: todolistID2, title: 'What to buy', filter: 'all'},
]

type ActionsType = {
    type: string
    payload: any
}

export const todolistsReducer = (state = initialState, action: ActionsType): Todolist[] => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            return [
                ...state,
            ]
        }
        case 'ADD-TODOLIST': {
            return [
                ...state,
            ]
        }
        default: 
            // throw new Error("I don't understand this type")
            return state
    }
}
