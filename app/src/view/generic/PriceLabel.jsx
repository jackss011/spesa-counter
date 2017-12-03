import React from 'react'


class PriceLabel extends React.Component {
    render() {
        const price = this.props.price.toFixed(2);

        return(
                <div className="price-label">
                    {price}
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
