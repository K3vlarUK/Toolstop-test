import React, { Component } from 'react';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            top20links: [
                            {company: "makita", image: "https://cdn11.bigcommerce.com/s-7holhynnib/product_images/uploaded_images/top-20-logos-makita-1.png?imwidth=300"},
                            {company: "dewalt", image: "https://cdn11.bigcommerce.com/s-7holhynnib/product_images/uploaded_images/top-20-logos-dewalt-1.png?imwidth=300"},
                            {company: "hikoki", image: "https://cdn11.bigcommerce.com/s-7holhynnib/product_images/uploaded_images/top-20-logos-hikoki-1.png?imwidth=300"},
                            {company: "bosch", image: "https://cdn11.bigcommerce.com/s-7holhynnib/product_images/uploaded_images/top-20-logos-bosch-1.png?imwidth=300"},
                            {company: "bahco", image: "https://cdn11.bigcommerce.com/s-7holhynnib/product_images/uploaded_images/top-20-logos-bahco-1.png?imwidth=300"},
                            {company: "metabo", image: "https://cdn11.bigcommerce.com/s-7holhynnib/product_images/uploaded_images/top-20-logos-metabo-1.png?imwidth=300"},
                            {company: "stanley", image: "https://cdn11.bigcommerce.com/s-7holhynnib/product_images/uploaded_images/top-20-logos-stanley-1.png?imwidth=300"},
                            {company: "evolution", image: "https://cdn11.bigcommerce.com/s-7holhynnib/product_images/uploaded_images/top-20-logos-evolution-1.png?imwidth=300"}
                        ]
         };
    }
    render() { 
        return ( 
            <div className="home-container">
                <h2>Top 40</h2>
                <div className="main-top40">
                    <a href="/top40">
                        <img src="https://cdn11.bigcommerce.com/s-7holhynnib/product_images/uploaded_images/top-40-banner.png" alt="" />
                    </a>
                </div>
                <div className="top40-brands-container">
                    {this.state.top20links.map((link, index) => {
                        return (
                            <div className="top40-brand" key={index}>
                                <a href={"/top40/" + link.company}><img src={link.image} alt="" /></a>
                            </div>
                        )
                    })}
                </div>
            </div>
         );
    }
}
 
export default HomePage;