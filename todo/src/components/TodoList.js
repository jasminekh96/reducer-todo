import React from 'react';

const TodoList = ({ todoArray, toggleTodo }) => {
	return (
		<div className='todo-list'>
			{todoArray.map((todo) => (
				<div
					style={todo.completed ? { textDecoration: 'line-through' } : null}
					key={todo.id}
					onClick={() => toggleTodo(todo.id)}
					className={todo.completed ? 'completed' : ''}>
					{todo.item}
				</div>
			))}
		</div>
	);
};
export default TodoList;
