import React, { Component } from "react";

import PortfolioItem from "./portfolio-item"


export default class PortfolioContainer extends Component {
    constructor () {
        super()
        
        this.state = {
            pageTitle: "Welcome to my Portfolio",
            data: [
                {title: "Quip", category: "eCommerce", url: "google.com"}, 
                {title: "EventBrite", category: "Scheduling", url: "eventBright.com"}, 
                {title: "Ministry Safe", category: "Enterprise", url: "safe.com"},
                {title: "SwingAway", category: "eCommerce", url: "swingaway.com"}
            ]
        };
        this.handleFilter = this.handleFilter.bind(this)
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={item.url}/>
        })
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }

    render () {
        return (
            //JSX
            <div>
                <h2>{this.state.pageTitle}</h2>
                <button onClick={() => this.handleFilter('eCommerce')}>eCommerce</button>
                <button onClick={() => this.handleFilter('Scheduling')}>Scheduling</button>
                <button onClick={() => this.handleFilter('Enterprise')}>Enterprise</button>
                {this.portfolioItems()}

            </div>
        )
    }
}