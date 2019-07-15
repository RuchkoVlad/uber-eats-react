import React from "react";
import "./Choose.css";
import {Card} from "../Card/Card";
import {Search} from "../Search/Search";
import {Link} from "react-router-dom";
import {restaurants} from "../Restaurant/info.js";

export class Choose extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: ''
        }
    }

    updateSearchValue = (searchValue) => {
        this.setState({
            searchValue: searchValue
        })
    };

    searchInCategories(restaurant) {
        for (let i = 0; i < restaurant.categories.length; i++) {
            if (
                restaurant.categories[i].uuid
                    .toLowerCase()
                    .includes(this.state.searchValue.toLocaleLowerCase())
            ) {
                return true;
            }
        }
        return false;
    }

    render() {
        return (
            <div className="choose__wrapper">
                <div className="choose">
                    <Search onSearchChange={this.updateSearchValue}/>
                    <span className="choose__title">Kyiv Restaurants</span>

                    <ul className="choose__cards">
                        <div className="choose__grid">
                            {restaurants
                                .filter((restaurant) => restaurant.title.toLowerCase().includes(this.state.searchValue) ||
                                    this.searchInCategories(restaurant)
                                )
                                .map(restaurant => {
                                    return (
                                        <Link to="/restaurant" className="choose__router-link">
                                            <Card
                                                key={restaurant.uuid}
                                                title={restaurant.title}
                                                categories={restaurant.categories}
                                                priceBucket={restaurant.priceBucket}
                                                etaRange={restaurant.etaRange}
                                                imageUrl={restaurant.imageUrl}
                                            />
                                        </Link>
                                    );
                                })}
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}
