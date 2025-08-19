import { Component } from 'react';
import './employees-add-form.css';



class EmployeesAddForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            salary: '',
            errors: {
                name: false,
                salary: false
            }
        }
    }

    addState = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }) 
    }

    onSubmit = (e) => {
        e.preventDefault();
        const errors = {
            name: this.state.name.length < 3,
            salary: this.state.salary === '' || this.state.salary < 0
        }

        if(!errors.name && !errors.salary) {
            this.props.onAdd(this.state.name, this.state.salary)
            this.setState({
                name: '',
                salary: '',
                errors: {
                    name: false,
                    salary: false
                }
            })
        } else {
            this.setState({ errors });
        }
    }

    render() {
        const {name, salary, errors} = this.state;
        return (
            <div className="app-add-form">
                <h3>Add a new employee</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className={"form-control new-post-label " + (errors.name ? 'error': '')}
                        placeholder="What is his name?" 
                        name="name"
                        value={name}
                        onChange={this.addState}/>
                    <input type="number"
                        className={"form-control new-post-label "  + (errors.salary ? 'error': '')}
                        placeholder="Salary in $?" 
                        name="salary"
                        value={salary}
                        onChange={this.addState}/>

                    <button type="submit"
                            className="btn btn-outline-light">Add</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;