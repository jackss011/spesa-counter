import React from 'react'

import EntryList from './entries/EntryList'
import EntryInputBox from './entries/EntryInputBox'


class App extends React.Component {
    render() {
        return (
            <div>
                <EntryList/>
                <EntryInputBox/>
            </div>
        );
    }
}

export default App;
