import React from 'react';

function TodoItem({ key, item, funcaoRemover }) {
	return (
		<div className='TodoItem'>
			<li key={key} className='TodoItemText'>{item}</li>
			<button onClick={funcaoRemover} className='TodoItemButtonRemover'>Remover</button>
		</div>
	);
}

export default TodoItem;