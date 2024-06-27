import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList() {
	const [items, setItems] = useState([]);
	const [inputValue, setInputValue] = useState('');

	const addItem = () => {
		if (inputValue) {
			setItems([...items, inputValue]);
			setInputValue('');
		}
	};

	const removeItem = (itemASerRemovido) => {
		let itemsAposRemocao = items.filter((item) => item != itemASerRemovido)
		setItems(itemsAposRemocao)
	}

	return (
		<div className='TodoList'>
			<h1 className='TodoListTitle'>Lista de Tarefas</h1>

			<div className="TodoListAdicionar">
				<input
					type="text"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>

				<button onClick={addItem} >Adicionar Tarefa</button>
			</div>

			<ul>
				{items.map((item, index) => (
					<TodoItem key={index} item={item} funcaoRemover={() => removeItem(item)} />
				))}
			</ul>
		</div>
	);
}

export default TodoList;
