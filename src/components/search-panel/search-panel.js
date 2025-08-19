import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            term: ''
        }
    }

    onUpdateChange = (e) => {
        const term = e.target.value
        this.setState({term})

        this.props.onSeach('term', term)
    }

    render() {
        return (
            <input type="text"
                    className="form-control search-input"
                    placeholder="Find an employee"
                    value={this.state.term}
                    onChange={this.onUpdateChange}/>
        )
    }
}

export default SearchPanel;