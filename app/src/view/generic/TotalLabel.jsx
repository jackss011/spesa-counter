import React from 'react'

import PriceLabel from './PriceLabel'


class TotalLabel extends React.Component {
    render() {
        return(
            <div className="total-label">
                <div className="label">Total:</div>
                <PriceLabel price={this.props.total}/>
            </div>
        );
    }
}


export default TotalLabel
