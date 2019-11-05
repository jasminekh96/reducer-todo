import React, { useReducer } from 'react';
import './App.css';
import { initialState, reducer } from './reducers/Reducer';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
function App() {
	const [ state, dispatch ] = useReducer(reducer, initialState);
	const addTodo = (item) => {
		dispatch({ type: 'ADD_TODO', payload: item });
	};
	const toggleTodo = (id) => {
		dispatch({ type: 'TOGGLE_TODO', payload: id });
	};
	const clearTodo = (id) => {
		dispatch({ type: 'CLEAR_COMPLETED' });
	};

	return (
		<div className='App'>
			<h1>ToDo</h1>
			<TodoForm addTodo={addTodo} clearTodo={clearTodo} />
			<TodoList todoArray={state.todoArray} toggleTodo={toggleTodo} />
		</div>
	);
}

export default App;
