import React from 'react'
import s from './TodoItem.module.less' 
import { MdClose, MdEdit, MdCheck } from 'react-icons/md'
const TodoItem = ({
	todo,
	setTitle,
	setText,
	updateTodo,
	completeTodo,
	saveTodo,
	removeTodo,
	update,
	title,
	text,
}) => {
	return (
		<>
			{update === todo.id ? (
				<form>
					<input
						value={title}
						onChange={e => setTitle(e.target.value)}
						type='text'
						placeholder='Исправить заголовок'
					/>
					<input
						onChange={e => setText(e.target.value)}
						value={text}
						type='text'
						placeholder='Исправить текст'
					/>
				</form>
			) : (
				<>
					<input type='checkbox' onChange={() => completeTodo(todo.id)} />
					<div>
						<h2 className={s.task}>{todo.title}</h2>
						<h3 className={s.task}>{todo.text}</h3>
					</div>
				</>
			)}

			{update === todo.id ? (
				<div>
					<MdCheck
						className={s.btn}
						size={30}
						onClick={() => saveTodo(todo.id)}
					/>
				</div>
			) : (
				<div>
					<MdClose
						className={s.btn}
						size={30}
						onClick={() => removeTodo(todo.id)}
					/>
					<MdEdit
						className={s.btn}
						size={30}
						onClick={() => updateTodo(todo.id, todo.title, todo.text)}
					/>
				</div>
			)}
		</>
	)
}

export default TodoItem
