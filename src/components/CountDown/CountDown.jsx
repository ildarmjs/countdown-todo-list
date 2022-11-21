import {useEffect, useState} from 'react'
import styles from './CountDown.module.less'
import { MdClose } from 'react-icons/md'
const CountDown = ({
	hours = 0,
	minutes = 0,
	seconds = 30,
	children,
	todo,
	removeTodo,
}) => {
	const [over, setOver] = useState(false)
	const [[h, m, s], setTime] = useState([hours, minutes, seconds])
	const [partyTime, setPartyTime] = useState(false)

	const tick = () => {
		if (h === 0 && m === 0 && s === 0) {
			setOver(true)
		} else if (m === 0 && s === 0) {
			setTime([h - 1, 59, 59])
		} else if (s == 0) {
			setTime([h, m - 1, 59])
		} else {
			setTime([h, m, s - 1])
		}
	}

	useEffect(() => {
		const timerID = setInterval(() => {
			tick()
			if (h <= 0 && m <= 0 && s <= 0) {
				setPartyTime(true)
			}
		}, 1000)
		return () => clearInterval(timerID)
	})

	return (
		<li>
			{partyTime ? (
				<div className={styles.notCompleted}>
					<span>Не супел завершить задачу</span>
					<div className={styles.late}>
						<div className={styles.text}>
							<span>Нзвание: </span>
							<h2>{todo.title}</h2>
						</div>
						<div className={styles.text}>
							<span>Цель: </span>
							<h3>{todo.text}</h3>
						</div>
						<MdClose
							className={styles.closeBtn}
							size={30}
							onClick={() => removeTodo(todo.id)}
						/>
					</div>
				</div>
			) : (
				<li className={styles.todoList}>
					{children}
					<p>
						{`${h.toString().padStart(2, '0')}:${m
							.toString()
							.padStart(2, '0')}:${s.toString().padStart(2, '0')}`}
					</p>
				</li>
			)}
		</li>
	)
}

export default CountDown
