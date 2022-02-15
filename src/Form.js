import { useState } from 'react'

function Form() {
	const [name, setName] = useState('')

	const onSubmit = (event) => {
		event.preventDefault()
		console.log(name)
	}

	return (
		<>
			<h1>Fill out your info or else</h1>
			<form onSubmit={onSubmit}>
				<input
					type='text'
					placeholder='Type your name here'
					value={name}
					onChange={(event) => setName(event.target.value)}
				/>
				<button type='submit'>Submit</button>
			</form>
		</>
	)
}

export default Form
