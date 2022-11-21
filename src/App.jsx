import React, {useEffect, useState } from 'react'
import './App.less'
import Form from './components/FormTodo/Form'


import TodoList from './components/TodoList/TodoList'

function App() {
	const [todos, setTodos] = useState([
		{
			id: Math.random(0, 100),
			title: 'Heading',
			text: 'Text',
			completed: false,
		},
	])

	

	return (
		<div className='app'>
			<Form setTodos={setTodos} todos={todos} />
			<TodoList todos={todos} setTodos={setTodos}/>
		</div>
	)
}

export default App
