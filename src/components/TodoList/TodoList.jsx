import React, { useEffect, useState } from 'react'
import CountDown from '../CountDown/CountDown'
import TodoItem from '../TodoItem/TodoItem'
import s from './TodoList.module.less'
import {MdClose} from 'react-icons/md'

const TodoList = ({ todos, setTodos }) => {
	const [update, setUpdate] = useState(null)
	const [title, setTitle] = useState('')
	const [text, setText] = useState('')

	const removeTodo = id => {
		let newTodos = [...todos].filter(t => t.id !== id)
		setTodos(newTodos)
	}
	const completeTodo = id => {
		let newTodos = [...todos].filter(t => {
			if (t.id === id) {
				t.completed = !t.completed
			}
			return t
		})
		setTodos(newTodos)
	}

	const updateTodo = (id, title, text) => {
		setUpdate(id)
		setTitle(title)
		setText(text)
	}
	const saveTodo = id => {
		let newTodo = [...todos].map(todo => {
			if (todo.id === id) {
				todo.title = title
				todo.text = text
			}
			return todo
		})
		setTodos(newTodo)
		setUpdate(null)
	}
	return (
		<ul className={s.todo}>
			
			{todos.length === 0 && <div>Задач нет, добавьте первую.</div>}

			{todos.map(todo => (
				<>
					{todo.completed ? (
						<div className={s.complete}>
							<span>Задача завершена</span>

							<div className={s.todo__task}>
								<div className={s.text}>
									<span>Название: </span>
									<h2>{todo.title}</h2>
								</div>
								<div className={s.text}>
									<span>Цель: </span>
									<h3>{todo.text}</h3>
								</div>
								<MdClose className={s.closeBtn} size={30}  onClick={() => removeTodo(todo.id)}/>
							</div>
						</div>
					) : (
						<CountDown todo={todo} removeTodo={removeTodo}>
							<TodoItem
								title={title}
								text={text}
								update={update}
								key={todo.id}
								todo={todo}
								setTitle={setTitle}
								setText={setText}
								updateTodo={updateTodo}
								completeTodo={completeTodo}
								saveTodo={saveTodo}
								removeTodo={removeTodo}
							/>
						</CountDown>
					)}
				</>
			))}
		</ul>
	)
}

export default TodoList
