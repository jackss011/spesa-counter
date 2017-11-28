import React from 'react'
import {connect} from 'react-redux'

import {ActionGenerator} from 'redux/actions'
import User from 'model/User'


class AddUserForm extends React.Component {
    constructor() {
        super();
        this.state = { id: '', name: '' };
    }

    render() {
        return (
            <form onSubmit={e => this.onSubmit(e)}>
                <input
                    type="text"
                    value={this.state.id}
                    onChange={e => this.onIdChange(e)}
                />
                <input
                    type="text"
                    placeholder="Insert name"
                    value={this.state.name}
                    onChange={e => this.onNameChange(e)}
                />
                <input
                    type="submit"
                    value="Add"
                    disabled={this.hasValidUser() ? false : true}
                />
            </form>
        );
    }

    onIdChange({target}) {
        let value = target.value;
        let oldValue = this.state.id;
        let lastChar = value.charAt(value.length - 1);

        let id;
        if(User.isValidId(lastChar))
            id = lastChar;
        else
            id = oldValue;

        this.setState({id});
    }

    onNameChange({target}) {
        let value = target.value;
        this.setState({name: value});
    }

    onSubmit(event) {
        event.preventDefault();

        let user = new User(this.state.id, this.state.name);
        this.props.onAddUser(user);

        this.reset();
    }

    reset() {
        this.setState({id: '', name: ''});
    }

    hasValidUser() {
        return this.state.id !== '' && this.state.name !== '';
    }
}


function mapDispatchToProps(dispatch) {
    return {
        onAddUser: user => dispatch(ActionGenerator.addUser(user))
    };
}

export default connect(null, mapDispatchToProps)(AddUserForm);
