import { useReducer, useState } from 'react';
import { createContainer } from 'react-tracked';
import { Item } from '../entities/TodoList';
import TodoGateway from '../gateway/TodoList';

type State = {
    todos: Item[]
  };
  
type Action =
    | { type: 'LOAD_TODOS'; }
    | { type: 'ADD_TODO'; title: string }
    | { type: 'DELETE_TODO'; id: number }
    | { type: 'TOGGLE_TODO'; id: number }
    | { type: 'SET_QUERY'; query: string };

const todoGateway = new TodoGateway();
const initialState: State = {
    todos: []
}

// https://github.com/facebook/react/issues/16295
const reducer = (state: State, action: Action): State => {
    console.log('REDUCER');
    switch (action.type) {
        case 'LOAD_TODOS':
            // todoGateway.getTodos();
            const items = [
                Item.create(undefined, 'Fazer café'),
                Item.create(undefined, 'Estudar programação'),
                Item.create(undefined, 'Almoçar'),
                Item.create(undefined, 'Estudar um pouco mais de programação'),
            ];
            return { ...state, todos: items };
            break;

        case 'ADD_TODO':
            const item = Item.create(undefined, action.title);
            console.log(action.type);
            todoGateway.addItem(item)
                .then(() => {
                    console.log(todoGateway);/*
                    todoGateway.getTodos()
                        .then(data => {
                            console.log(data.getItems());
                        })*/
                });
            return { 
                ...state, 
                todos: state.todos.concat(item)
            };
            break;
    
        default:
            return state;
            break;
    }
}

const useValue = () => useReducer(reducer, initialState);

export const {
  Provider: TodoAppStateProvider,
  useTrackedState,
  useUpdate: useDispatch,
} = createContainer(useValue);