import React from 'react'

const Search = ({search,handleSearch, searchCharacters}) => {
     
  return (
    <div className='search'>
         <input
          type='search'
          value={search}
          onKeyUp={e => searchCharacters(e.target.value)}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search Characters..."
          />
    </div>
  )
}

export default Search