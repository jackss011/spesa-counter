import React from 'react'
import {connect} from 'react-redux'

import {ActionGenerator} from 'redux/actions'
import EntryList from './entries/EntryList'
import EntryInputBox from './entries/EntryInputBox'
import UserPane from './users/UserPane'


class App extends React.Component {
    componentWillMount() {
        this.props.onInit();
    }

    render() {
        return (
            <div>
                <EntryList/>
                <EntryInputBox/>
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
