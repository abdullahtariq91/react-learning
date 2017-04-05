import React, { Component } from 'react';
import axios from 'axios';

const Title = ({todoCount}) => {
	return (
		<div>
			<div>
				<h1>ToDo Count: {todoCount}</h1>
			</div>
		</div>
	);
}

const TodoForm = ({addTodo}) => {
	let input;
	return (
		<form onSubmit={(e) => {
			e.preventDefault();
			addTodo(input.value);
			input.value = '';
		}}>
			<input className="form-control col-md-12" ref={node => {
				input = node;
			}}/>
			<br />
		</form>
	);
}

const Todo = ({todo, remove}) => {
	return (<a href="#" className="list-group-item" onClick={() => {remove(todo.id)}}>{todo.text}</a>);
}

const TodoList = ({todos, remove}) => {
	// Map through the todos
	const todoNode = todos.map((todo) => {
		return (<Todo todo={todo} key={todo.id} remove={remove}/>)
	});
	return (<div className="list-group" style={{marginTop:'30px'}}>{todoNode}</div>);
}

window.id = 0;
export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		}
		this.apiUrl = 'https://57b1924b46b57d1100a3c3f8.mockapi.io/api/todos'
	}

	componentDidMount() {
		axios.get(this.apiUrl).then((res) => {
			this.setState({data:res.data});
		});
	}

	addTodo(val) {
		const todo = {text: val}
		axios.post(this.apiUrl, todo).then((res) => {
			this.state.data.push(res.data);
			this.setState({data: this.state.data});
		});
	}

	handleRemove(id) {
		const remainder = this.state.data.filter((todo) => {
			if (todo.id !== id) return todo;
		});
		axios.delete(this.apiUrl + '/' + id).then((res) => {
			this.setState({data: remainder});
		});
	}

	render() {
		return (
		<div>
			<Title todoCount={this.state.data.length}/>
			<TodoForm addTodo={this.addTodo.bind(this)}/>
			<TodoList
				todos={this.state.data}
				remove={this.handleRemove.bind(this)}
			/>
		</div>
		);
	}
}