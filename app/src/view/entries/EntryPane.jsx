import React from 'react'
import {connect} from 'react-redux'

import EntryList from './EntryList'
import EntryHeader from './EntryHeader'
import EntryInputBox from './EntryInputBox'
import InfoText from 'view/generic/InfoText'
import {isObjectEmpty} from 'model/utils'


class EntryPane extends React.Component {
    render() {
        const showList = this.props.hasEntries;
        const hasUsers = this.props.hasUsers;
        // TODO: USE If here
        return (
            <div className="entry-pane">
                <EntryHeader/>
                {showList && <EntryList/>}
                {showList && <div className="flex-space"/>}
                {!showList &&
                    <InfoText text={hasUsers
                        ? 'No entries yet'
                        : 'Add at least one user before adding entries'}
                    />
                }
                <EntryInputBox/>
            </div>
        )
    }
}

function mapStateToProps({entries, users}) {
    return {
        hasEntries: !isObjectEmpty(entries),
        hasUsers: !isObjectEmpty(users),
    };
}

export default connect(mapStateToProps)(EntryPane);
