import React, { Component } from "react";

import PortfolioItem from "./portfolio-item"


export default class PortfolioContainer extends Component {
    constructor () {
        super()
        
        this.state = {
            pageTitle: "Welcome to my Portfolio",
            data: [
                {title: "Quip"}, 
                {title: "EventBrite"}, 
                {title: "Ministry Safe"},
                {title: "SwingAway"}
            ]
        };
        this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this)
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title}/>
        })
    }

    handlePageTitleUpdate() {
        this.setState({
            pageTitle: "Something Else"
        });
    }

    render () {
        return (
            //JSX
            <div>
                <h2>{this.state.pageTitle}</h2>
                <h2>Portfolio Items go Here...</h2>
                {this.portfolioItems()}

                <hr/>

                <button onClick={this.handlePageTitleUpdate}>Change Title</button>
            </div>
        )
    }
}