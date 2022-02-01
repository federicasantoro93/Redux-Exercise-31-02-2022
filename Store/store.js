import { createStore } from 'redux';

const initialState = {
  todos: [
    {
      text: 'Prima nota',
      id: 1,
      done: true,
    },
    {
      text: 'Seconda nota',
      id: 2,
      done: false,
    },
    {
      text: 'Terza nota',
      id: 3,
      done: true,
    },
    {
      text: 'Quarta nota',
      id: 4,
      done: false,
    },
  ],
};

const todosReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return {
        todos: [...state.todos, action.payload],
      };

    case 'remove':
      return {
        todos: state.todos.filter((item) => item.id !== action.payload),
      };

    case 'done':
      const newTodoState = [...state.todos];
      const foundIndex = newTodoState.findIndex(
        (note) => note.id === action.payload
      );
      newTodoState[foundIndex] = {
        ...newTodoState[foundIndex],
        done: !newTodoState[foundIndex].done,
      };
      return {
        todos: newTodoState,
      };

    default:
      return state;
  }
};

export const store = createStore(todosReducer, initialState);
