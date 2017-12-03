import React from 'react'
import {connect} from 'react-redux'

import {ActionGenerator} from 'redux/actions'
import EntryPane from './entries/EntryPane'
import UserPane from './users/UserPane'


class App extends React.Component {
    componentWillMount() {
        this.props.onInit();
    }

    render() {
        return (
            <div className="main-pane">
                <EntryPane/>
                <UserPane/>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return {
        onInit: () => dispatch(ActionGenerator.init())
    };
}

export default connect(null, mapDispatchToProps)(App)
