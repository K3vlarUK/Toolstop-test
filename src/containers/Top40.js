import React from 'react';

class Top40 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            error: null,
            isLoaded: false,
            items: null
        };
    }

    componentDidMount() {
        fetch("https://product-fetch-toolstop.herokuapp.com/top40")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.data
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render() { 
        if(!this.state.items){
            return <div />
        }
        
        return ( 
            <div>
            <div className="top40-banner">
                <img className="top40-banner" src="https://cdn11.bigcommerce.com/s-7holhynnib/product_images/uploaded_images/top-40-banner.png" alt="" />
            </div>
            <br/>
                <div className="top40-products">
                    {this.state.items.map((item, index) => {
                        return (
                            <div className="product"  key={index}>
                                <a href={'https://www.toolstop.co.uk' + item.custom_url.url}>
                                    <img src={item.images[0].url_thumbnail} alt=""/>
                                    <p>{item.name}</p>
                                    <p>£{(item.price * 1.2).toFixed(2)}</p>
                                    <p>£{item.price.toFixed(2)} ex. VAT</p>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}
 
export default Top40;