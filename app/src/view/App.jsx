import React from 'react'

import EntryList from './EntryList'
import EntryInputBox from './EntryInputBox'


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
