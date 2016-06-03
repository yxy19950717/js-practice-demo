import { createStore } from 'redux';

const todos = (state = [''], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return Object.assign([], state, [action.text]);
        default:
            return state;
    }
};

let store = createStore(todos, [ 'Use Redux' ]);

function addTodo(text) {
    return {
        type: 'ADD_TODO',
        text
    };
}

const handleChange = () => {
    console.log(store.getState());
};

store.subscribe(handleChange);
handleChange();

store.dispatch(addTodo('Read the docs'));
store.dispatch(addTodo('Read about the middleware'));
