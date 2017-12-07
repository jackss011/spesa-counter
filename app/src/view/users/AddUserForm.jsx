import React from 'react'
import {connect} from 'react-redux'

import { ActionGenerator } from 'redux/actions'
import User from 'model/User'
import * as reduxHelpers from 'redux/helpers'


class AddUserForm extends React.Component {
    constructor() {
        super();
        this.state = { id: '', name: '' };
    }

    render() {
        return (
            <form onSubmit={e => this.onSubmit(e)} className="add-user">
                <input
                    name="id"
                    type="text"
                    ref={input => this.firstInput = input}
                    value={this.state.id}
                    onChange={e => this.onIdChange(e)}
                    autocapitalize="off"
                    autocorrect="off"
                    autoComplete="off"
                />
                <input
                    name="name"
                    type="text"
                    placeholder="Insert name"
                    value={this.state.name}
                    onChange={e => this.onNameChange(e)}
                    autocorrect="off"
                />
                <button
                    type="submit"
                    value="Add"
                    disabled={this.hasValidUser() ? false : true}
                    className="material-icons"
                >
                    keyboard_arrow_right
                </button>
            </form>
        );
    }

    onIdChange({target}) {
        let value = target.value;
        let oldValue = this.state.id;
        let lastChar = value.charAt(value.length - 1);

        let id;
        if(User.isValidId(lastChar) && this.props.isUserIdUnique(lastChar))
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
        this.firstInput.focus();
        this.setState({id: '', name: ''});
    }

    hasValidUser() {
        return this.state.id !== '' && this.state.name !== '';
    }
}



function mapStateToProps({users}) {
    return {
        isUserIdUnique: id => !reduxHelpers.existUserId(users, id)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onAddUser: user => dispatch(ActionGenerator.addUser(user))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUserForm);
