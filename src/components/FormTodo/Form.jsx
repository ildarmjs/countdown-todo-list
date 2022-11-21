import React, { useState } from 'react'
import s from './Form.module.less'

const Form = ({ setTodos, todos }) => {
	const [title, setTitle] = useState('')
	const [text, setText] = useState('')
	const [validate, setValidate] = useState('')
	const addTodo = () => {
		setValidate('')
		if (title.trim().length === 0 || text.trim().length === 0) {
			setValidate('Не все поля заполнены!')
      return
		}
		setTodos([
			...todos,
			{
				id: Math.random(0, 100),
				title: title,
				text: text,
				completed: false,
			},
		])
		setTitle('')
		setText('')
	}
	return (
		<div className={s.bodyForm}>
			<form className={s.form} onSubmit={e => e.preventDefault()}>
				{validate && <span>{validate}</span>}
				<input
					value={title}
					onChange={e => setTitle(e.target.value)}
					type='text'
					placeholder='Заголовок'
				/>
				<input
					value={text}
					onChange={e => setText(e.target.value)}
					type='text'
					placeholder='Текст '
				/>
				<button onClick={addTodo} type='submit'>
					Добавить
				</button>
			</form>
		</div>
	)
}

export default Form
