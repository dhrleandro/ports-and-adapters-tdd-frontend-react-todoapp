import { useReducer, useState } from 'react';
import { createContainer } from 'react-tracked';
import { Item } from '../entities/TodoList';
import TodoGateway from '../gateway/TodoList';
import { Action } from './actions';

export type State = {
    todos: Item[]
  };

const initialState: State = {
    todos: []
}

// https://github.com/facebook/react/issues/16295
const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_TODOS':
            return { ...state, todos: action.todos };

        case 'ADD_TODO':
            return { 
                ...state, 
                todos: state.todos.concat(action.item)
            };

        case 'UPDATE_TODO':
            const todos = [ ...state.todos ];
            const index = state.todos.findIndex(item => item.id === action.item.id);
            todos[index] = action.item;
            return { 
                ...state, 
                todos: todos
            };

        default:
            return state;
    }
}

const useValue = () => useReducer(reducer, initialState);

export const {
  Provider: TodoAppStateProvider,
  useTrackedState,
  useUpdate: useDispatch,
} = createContainer(useValue);