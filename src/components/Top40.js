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
            <div className="top40-products">
                {this.state.items.map((item, index) => {
                    return (
                        <div className="product">
                            <img src={item.images[0].url_thumbnail} alt="" key={index}/>
                            <p>{item.name}</p>
                            <p>£{(item.price * 1.2).toFixed(2)}</p>
                            <p>£{item.price.toFixed(2)} ex. VAT</p>
                        </div>
                    )
                })}
            </div>
        );
    }
}
 
export default Top40;