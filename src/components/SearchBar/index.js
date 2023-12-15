import {Link} from 'react-router-dom'
import {useState} from 'react'

import './index.css'

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('')

  return (
    <div className="search-bar">
      <div className="input-wrapper">
        <input
          type="search"
          placeholder="Type to search..."
          className="input-text-box"
          value={searchInput}
          onChange={e => setSearchInput(e.target.value.toLowerCase())}
        />
      </div>
      <Link to={`/search/${searchInput}`} className="search-link">
        <button type="button" className="search-btn">
          Search
        </button>
      </Link>
    </div>
  )
}

export default SearchBar
