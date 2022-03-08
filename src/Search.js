import React from 'react'

const Search = ({search,handleSearch}) => {
     
  return (
    <div className='search'>
         <input
          type='search'
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search Characters..."
          />
    </div>
  )
}

export default Search