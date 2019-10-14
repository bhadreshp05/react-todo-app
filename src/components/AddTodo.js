import React, { Component}  from 'react';

class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.props.addTodo({
            id: new Date(),
            title: this.state.title,
            completed: false
        });

        this.setState({ title: '' })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    className="input-todo"
                    type="text" 
                    name="title" 
                    placeholder="Add Todo" 
                    value={this.state.title}
                    onChange={this.onChange}/>
                <input
                    type="submit"
                    value="+"
                    className="btn btn-add active"
                    />
            </form>
        )
    }
}

export default AddTodo;