import React from 'react';

class Top20 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            error: null,
            isLoaded: false,
            items: null
        };
    }

    componentDidMount() {
        let url = "https://product-fetch-toolstop.herokuapp.com/top40/" + this.props.match.params.brand;
        fetch(url)
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
            <div className="container">
                <br/>
                <div className="top40-banner">
                    <img className="top40-banner" src={"https://cdn11.bigcommerce.com/s-7holhynnib/product_images/uploaded_images/top-20-logos-" + this.props.match.params.brand  + "-2.png?imwidth=500"} alt="" />
                </div>
                <br/>
                <div className="top40-products">
                    {this.state.items.map((item, index) => {
                        return (
                            <div className="product"  key={index}>
                                <a href={'https://www.toolstop.co.uk' + item.custom_url.url}>
                                    <img src={item.images[0].url_thumbnail} alt=""/>
                                    <p className="product-name">{item.name}</p>
                                    <p className="product-inc-vat">£{(item.price * 1.2).toFixed(2)}</p>
                                    <p className="product-no-vat">£{item.price.toFixed(2)} ex. VAT</p>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}
 
export default Top20;