import React, { useState } from 'react'
import { restaurants } from "../../data/restaurants";
import ExploreSection from '../common/exploreSection';

const Search = () => {
    const searchTerm = localStorage.getItem('Search Term');
    const searchResults = [];
    const getResults = () => {
        restaurants.map((res) => {
            if(res?.info?.name?.toLowerCase().includes(searchTerm.toLowerCase()))
                searchResults.push(res);
        })
    }
    console.log(searchResults);

    getResults();
    return (
        <div>
            <ExploreSection 
                restaurants={searchResults}
                collectionName={`Search Results for ${searchTerm}`}
            />
        </div>
    )
}

export default Search;