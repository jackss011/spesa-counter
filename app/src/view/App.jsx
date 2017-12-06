import React from 'react'
import {connect} from 'react-redux'

import {ActionGenerator} from 'redux/actions'
import {isPortrait} from 'model/layout';

import Header from './Header'
import EntryPane from './entries/EntryPane'
import UserPane from './users/UserPane'
import If from 'view/generic/If'


class App extends React.Component {
    componentWillMount() {
        this.props.onInit();
    }

    render() {
        const onePane = isPortrait();
        const showEntries = this.props.showPane === 'ENTRIES';

        return (
            <div className="main">
                <Header/>

                <div className="main-pane">
                    <If if={!onePane}>
                        <EntryPane/>
                        <UserPane/>
                    </If>

                    <If if={onePane}>
                        {showEntries
                        ? <EntryPane/>
                        : <UserPane/>}
                    </If>
                </div>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return {
        onInit: () => dispatch(ActionGenerator.init())
    };
}

function mapStateToProps({ui}) {
    return {
        showPane: ui.showPane
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
