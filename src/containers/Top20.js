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
            <div>
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
 
export default Top20;