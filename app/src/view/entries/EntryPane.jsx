import React from 'react'

import EntryList from './EntryList'
import EntryHeader from './EntryHeader'
import EntryInputBox from './EntryInputBox'


class EntriesPane extends React.Component {
    render() {
        return (
            <div className="entry-pane">
                <EntryHeader/>
                <EntryList/>
                <div className="flex-space"/>
                <EntryInputBox/>
            </div>
        )
    }
}

export default EntriesPane
