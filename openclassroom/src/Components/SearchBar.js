import React from 'react';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
    }

    onInputChange(event) {
        let target = event.target.value;
        this.setState({term: target});
    }

    render() {
        return (
            <div>
                <input value = {this.state.term} onChange={this.onInputChange.bind(this)}/>
            </div>
        );
    }
}