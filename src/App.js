import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import About from './components/pages/About';

// CSS
import './App.css';

class App extends Component {
	state = {
		todos: [
			{
				id: 1,
				title: 'Take out the trash',
				completed: true
			},
			{
				id: 2,
				title: 'Dinner with someone',
				completed: false
			},
			{
				id: 3,
				title: 'Get milk',
				completed: false
			}
		]
	}
	
	// Toggle Complete
	toggleComplete = (id) => {
        this.setState({ 
			todos: this.state.todos.map(todo => {
				if(todo.id === id) {
					todo.completed = !todo.completed
				}
				return todo;
			})
		})
	}
	
	// Delete TODO
	delTodo = (id) => {
		this.setState({
			todos: this.state.todos.filter(todo => todo.id !== id)
		})
	}

	// Add TODO
	addTodo = (todo) => {
		this.setState({
			todos: [...this.state.todos, todo]
		})
	}

	render() {
		return (
			<Router>
				<div className="todo-wrapper">
					<Header />
					<Route exact path="/" render={props => (
						<React.Fragment>
							<AddTodo addTodo={this.addTodo} />
							<Todos 
								todos={this.state.todos} 
								toggleComplete={this.toggleComplete}
								delTodo={this.delTodo}
							/>
						</React.Fragment>
					)} />
					<Route path="/about" component={About} />
				</div>
			</Router>
		);
	}
}

export default App;
