import React, { Component } from "react";

import PortfolioItem from "./portfolio-item"


export default class PortfolioContainer extends Component {
    constructor () {
        super()
        
        this.state = {
            pageTitle: "Welcome to my Portfolio",
            isLoading: false,
            data: [
                {title: "Quip", category: "eCommerce", url: "google.com", slug: 'quip'}, 
                {title: "EventBrite", category: "Scheduling", url: "eventBright.com", slug: 'eventbrite'}, 
                {title: "Ministry Safe", category: "Enterprise", url: "safe.com", slug: 'ministry-safe'},
                {title: "SwingAway", category: "eCommerce", url: "swingaway.com", slug: 'swingaway'}
            ]
        };
        this.handleFilter = this.handleFilter.bind(this)
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={item.url} slug={item.slug}/>
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
        if (this.state.isLoading) {
            return <div>Loading . . . </div>
        }
        
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