const SearchItem = ({ searchItem, setSearchItem }) => {
  return (
    <form className="item-form" onSubmit={(e) => {e.preventDefault()}}>
      <label htmlFor="search-input">Search Item</label>
      <input
        type="text"
        id="search-input"
        role="searchbox"
        placeholder="Search items"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
    </form>
  )
}

export default SearchItem;