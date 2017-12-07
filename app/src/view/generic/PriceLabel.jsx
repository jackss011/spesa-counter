import React from 'react'


class PriceLabel extends React.Component {
    render() {
        const price = this.props.price|| 0;

        return(
                <div className="price-label">
                    {price.toFixed(2)}
                    <span className="currency">
                        {this.getCurrency()}
                    </span>
                </div>
        );
    }

    getCurrency() {
        return '\u20AC'
    }
}


export default PriceLabel
