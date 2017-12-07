import React from 'react'
import {connect} from 'react-redux'

import {ActionGenerator} from 'redux/actions'
import {isMobile} from 'model/layout';

import If from 'view/generic/If'
import TabSelector from 'view/tab/TabSelector'
import Header from './Header'
import EntryPane from './entries/EntryPane'
import UserPane from './users/UserPane'


class App extends React.Component {
    componentWillMount() {
        this.props.onInit();
    }

    render() {
        const onePane = isMobile();
        const showEntries = this.props.selectedPane === 'ENTRIES';

        return (
            <div className="main">
                <Header/>

                {onePane && <TabSelector/>}

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
        selectedPane: ui.selectedPane
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
