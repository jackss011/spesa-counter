import React from 'react'

import EntryList from './entries/EntryList'
import EntryInputBox from './entries/EntryInputBox'
import UserPane from './users/UserPane'


class App extends React.Component {
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

export default App
