import React from 'react'

const SearchBar = (props) => {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search for a Movie..."
                value={props.value}
                className='form-control'
                onChange={(e) => props.setSearchValue(e.target.value)}
            />
        </div>
    )
}

export default SearchBar
