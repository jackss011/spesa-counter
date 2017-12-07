import React from 'react'
import {connect} from 'react-redux'

import {ActionGenerator} from 'redux/actions'
import Tab from './Tab'


class TabSelector extends React.Component {
    render() {
        const selectedPane = this.props.selectedPane;

        return (
            <div className="tab-selector">
                <Tab
                    onClick={e => this.props.selectPane('ENTRIES')}
                    selected={selectedPane === 'ENTRIES'}
                >
                    Entries
                </Tab>

                <Tab
                    onClick={e => this.props.selectPane('USERS')}
                    selected={selectedPane === 'USERS'}
                >
                    Users
                </Tab>
            </div>
        );
    }
}


export function mapStateToProps({ui}) {
    return {
        selectedPane: ui.selectedPane,
    };
}

export function mapDispatchToProps(dis) {
    return {
        selectPane: pane => dis(ActionGenerator.UI_selectPane(pane)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TabSelector)
